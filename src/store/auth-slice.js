import {  createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isLoggedIn },
  reducers: {
    login(state) {
      state.isLoggedIn = true; //reduxjs/toolkit makes a copy of state for you, so you are not overriding state here
    },
    logout(state) {
      state.isLoggedIn = false;
    },
  },
});

const authActions = authSlice.actions;

export default authSlice;
