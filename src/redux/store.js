import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./productSlice";
import basketReducer from "./basketSlice";

const store = configureStore({
  reducer: { productReducer, basketReducer },
});

export default store;
