import { createSlice } from "@reduxjs/toolkit";

export const productReducer = createSlice({
  name: "counter",
  initialState: {
    token: "",
  },
  reducers: {
    signUp: async (state, { payload }) => {},
    login: async (state, { payload }) => {},
    getUserData: async (state, { payload }) => {},
    exitProfile: async (state, { payload }) => {},
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount } =
  productReducer.actions;

export default productReducer.reducer;
