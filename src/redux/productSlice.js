import { createSlice } from "@reduxjs/toolkit";
import { getCategories, getData } from "./action";

const productSlice = createSlice({
  name: "product",
  initialState: {
    categories: [],
    categoryLoader: true,
    products: [],
    sliderProducts: [],
    isLoading: true,
    isError: null,
    sortValue: "asc",
  },
  reducers: {
    sortFilter: (state, action) => {
      state.sortValue = action.payload;

      console.log(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getData.fulfilled, (state, action) => {
      state.products = action.payload;
      state.isLoading = false;
      state.isError = null;
    });

    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.categories = action.payload;
      state.categoryLoader = false;
    });
    builder.addCase(getCategories.pending, (state, action) => {
      state.categoryLoader = true;
    });

    builder.addCase(getData.pending, (state) => {
      state.isLoading = true;
    });

    builder.addCase(getData.rejected, (state, action) => {
      state.isError = action.error.message;
      state.isLoading = false;
    });
  },
});

export const { sortFilter } = productSlice.actions;
export default productSlice.reducer;
