import { configureStore } from "@reduxjs/toolkit";

import { persistStore, persistReducer } from "redux-persist";
import storage from "./storage";
import { reducer } from "./authReducer";
import thunk from "redux-thunk";

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, reducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: process.env.NODE_ENV !== "production",
  middleware: [thunk],
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
