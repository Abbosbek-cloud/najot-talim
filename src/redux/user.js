import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { server } from "../constants";

export const userReducer = createSlice({
  name: "counter",
  initialState: {
    token: "",
  },
  reducers: {
    signUpDispatch: async (state, { payload }) => {
      // console.log(payload);
      try {
        const res = await axios({
          url: `${server}/user/sign-up`,
          method: "post",
          data: payload,
        });
        console.log(res.data);
        payload.m;
        state.token = res.data;
      } catch (err) {
        console.log(err);
      }
    },
    loginDispatch: async (state, { payload }) => {
      try {
        const res = await axios({
          url: `${server}/user/sign-in`,
          method: "post",
          data: payload,
        });

        state.token = res.data;
      } catch (err) {
        console.log(err);
      }
    },
  },
});

// Action creators are generated for each case reducer function
export const { signUpDispatch, loginDispatch } = userReducer.actions;

export default userReducer.reducer;
