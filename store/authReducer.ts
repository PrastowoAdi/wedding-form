import { createSlice } from "@reduxjs/toolkit";
import initialState from "./initialState";

import { HYDRATE } from "next-redux-wrapper";

const AuthSlice = createSlice({
  name: "DIVORY-AUTH",
  initialState,
  reducers: {
    authSetTitleNav: (state, action) => {
      return {
        ...state,
        nav: {
          title: action.payload,
        },
      };
    },
    authLogin: (state, action) => {
      return {
        ...state,
        isLogin: true,
        token: action.payload,
      };
    },
    authLogout: () => {
      return {
        nav: {
          title: "Dashboard",
        },
        isLogin: false,
        token: "",
      };
    },
  },
  extraReducers: {
    [HYDRATE]: (state, action) => {
      return {
        ...state,
        ...action.payload.auth,
      };
    },
  },
});

export const { name, actions, reducer } = AuthSlice;
