import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getData = createAsyncThunk(
  "product/getData",
  async (arg, thunkAPI) => {
    // console.log(arg);
    const state = thunkAPI.getState();
    const filter = state.productReducer.sortValue;
    // console.log(state.productReducer.sortValue);
    let res;
    if (arg?.category) {
      res = await axios.get(
        `https://fakestoreapi.com/products/category/${arg.category}?sort=${filter}`
      );
      // console.log("filtrele");
    } else {
      res = await axios.get(
        `https://fakestoreapi.com/products/?sort=${filter}`
      );
      // console.log("tüm datayı listele");
      // console.log("all data ", res.data);
    }

    return res.data;
  }
);

export const getCategories = createAsyncThunk(
  "product/getCategories",
  async () => {
    const res = await axios.get("https://fakestoreapi.com/products/categories");

    // console.log("categories ", res.data);
    return res.data;
  }
);

// basket Slice

export const getProduct = createAsyncThunk("basket/getProduct", async (arg) => {
  const id = arg.id;
  const res = await axios.get(`https://fakestoreapi.com/products/${id}`);

  const updatedProduct = { ...res.data, amount: 1 };

  return updatedProduct;
});

export const addBasket = createAsyncThunk("basket/addBasket", async (arg) => {
  const product = arg;

  return product;
});
