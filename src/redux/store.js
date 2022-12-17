import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./product";
import userReducer from "./user";

export default configureStore({
  reducer: {
    user: userReducer,
    product: productReducer,
  },
});
