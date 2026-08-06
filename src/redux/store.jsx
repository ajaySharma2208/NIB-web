

import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./reducers/authSlice";
import  pospSignUpInSlice  from "./reducers/PospSignUpInSlice";


const store = configureStore({
  reducer: {
    auth: authReducer,
    register:pospSignUpInSlice


  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,     // 🚀 Disable slow immutability checks
      serializableCheck: false,  // 🚀 Disable serializable checks (optional)
    }),
});

export default store;
