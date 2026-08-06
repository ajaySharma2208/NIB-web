

import { createSlice } from "@reduxjs/toolkit";
import Cookies from "js-cookie";
import {
  setEncryptedCookie,
  getDecryptedCookie,
  removeCookie,
} from "../../utility/AuthCookies/secureCookie";

// ✅ Detect environment (local vs production)
const isLocal = window.location.hostname === "localhost";

const cookieOptions = {
  expires: 0.33, // ~8 hours in days
  secure: !isLocal, // ✅ HTTPS only in production
  sameSite: isLocal ? "Lax" : "None", // ✅ "Lax" for local dev
  domain: isLocal ? undefined : ".notioninsurance.in",
  path: "/", // ✅ Always set path explicitly
};

const initialState = {
  token: null,
  user: null,
  loading: false, // ✅ start true to delay route redirect
  error: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.loading = true;
      state.error = null;
    },

    loginSuccess: (state, action) => {
      state.loading = false;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAuthenticated = true;
      state.error = null;

      // ✅ Save token in cookie
      Cookies.set("authToken", action.payload.token, cookieOptions);

      // ✅ Save encrypted user info
      setEncryptedCookie("auth_info", {
        id: action.payload.user.id,
        email: action.payload.user.email,
        name: action.payload.user.name,
        mobile: action.payload.user.mobile,
        code: action.payload.user.code,
        role: action.payload.user.role,
      });
    },

    loginFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;

      // ❌ Remove cookies on failure
      Cookies.remove("authToken", cookieOptions);
      removeCookie("auth_info");
    },

    logout: (state) => {
      state.token = null;
      state.user = null;
      state.isAuthenticated = false;
      state.error = null;
      state.loading = false;

      // ❌ Clear cookies properly
      Cookies.remove("authToken", cookieOptions);
      removeCookie("auth_info");
    },

    clearError: (state) => {
      state.error = null;
    },

    setCredentials: (state, action) => {
      const { user, token } = action.payload;
      state.user = user;
      state.token = token;
      state.isAuthenticated = true;
      state.loading = false;

      // ✅ Reset cookies to refresh expiry
      Cookies.set("authToken", token, cookieOptions);
      setEncryptedCookie("auth_info", user);
    },

    setAuthLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const {
  loginStart,
  loginSuccess,
  loginFailure,
  logout,
  clearError,
  setCredentials,
  setAuthLoading,
} = authSlice.actions;

export default authSlice.reducer;

