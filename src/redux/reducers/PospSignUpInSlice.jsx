// PospSignUpInSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  success: false,
  signupError: null,
  fieldErrors: {}, // Store field-specific errors
  message: null,
};

export const pospSignUpInSlice = createSlice({
  name: "register",
  initialState,
  reducers: {
    signupStart: (state) => {
      state.loading = true;
      state.success = false;
      state.signupError = null;
      state.fieldErrors = {}; // Reset field errors
      state.message = null;
    },
    signupSuccess: (state, action) => {
      state.loading = false;
      state.success = true;
      state.message = action.payload.message;
      state.fieldErrors = {}; // Clear field errors on success
    },
    signupFailure: (state, action) => {
      state.loading = false;
      state.success = false;
      state.signupError = action.payload.message || "Registration failed";
      // Store field-specific errors if available
      state.fieldErrors = action.payload.errors || {};
    },
    resetSignupState: (state) => {
      state.loading = false;
      state.success = false;
      state.signupError = null;
      state.fieldErrors = {};
      state.message = null;
    },
  },
});

export const { signupStart, signupSuccess, signupFailure, resetSignupState } =
  pospSignUpInSlice.actions;

export default pospSignUpInSlice.reducer;