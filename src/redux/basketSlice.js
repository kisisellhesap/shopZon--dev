import { createSlice } from "@reduxjs/toolkit";
import { addBasket, getProduct } from "./action";

const basketSlice = createSlice({
  name: "basket",
  initialState: {
    basket: [],
    isLoading: true,
    isError: null,
    singleProduct: {},
    productLoading: true,
  },

  reducers: {
    add: (state, action) => {
      state.basket.push(action.payload);
      state.isLoading = false;
      state.isError = null;
    },
    deleteBasket: (state, action) => {
      state.basket = state.basket.filter((item) => item.id !== action.payload);
    },
    plus: (state, action) => {
      // console.log(action.payload);

      state.basket = state.basket.map((item) =>
        item.id === action.payload ? { ...item, amount: item.amount + 1 } : item
      );
    },
    minus: (state, action) => {
      state.basket = state.basket.map((item) =>
        item.id === action.payload && item.amount > 1
          ? { ...item, amount: item.amount - 1 }
          : item
      );
    },
  },
  extraReducers: (builder) => {
    builder.addCase(addBasket.fulfilled, (state, action) => {
      state.basket.push(action.payload);
      state.isLoading = false;
      state.isError = null;
    });

    builder.addCase(getProduct.fulfilled, (state, action) => {
      state.singleProduct = action.payload;
      state.productLoading = false;
    });
    builder.addCase(getProduct.pending, (state) => {
      state.singleProduct = {};
      state.productLoading = true;
    });
  },
});

export const { plus, minus, add, deleteBasket } = basketSlice.actions;
export default basketSlice.reducer;
