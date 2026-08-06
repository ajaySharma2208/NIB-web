import axios from "../../config/axios";
import { loginStart, loginSuccess, loginFailure, logout } from "../reducers/authSlice";
import Cookies from "js-cookie";
import { getDecryptedCookie, removeCookie } from "../../utility/AuthCookies/secureCookie";
import { redirect } from "react-router-dom";



export const loginAuth = (credentials) => async (dispatch) => {
  dispatch(loginStart());

  try {
    const res = await axios.post("/login", credentials);

    // --- NON-POSP USERS (redirect only, no redux login) ---
    if (res.data.user_type === "non_posp") {
      return {
        success: true,
        redirect_url: res.data.redirect_url,
        action: res.data.action
      };
    }

    // --- POSP USERS  or accounts (normal login) ---
    if (res.data.success) {
      dispatch(loginSuccess({ token: res.data.token, user: res.data.user }));

      return {
        success: true,
        redirect: res.data.redirect,
        action: res.data.action,
        role: res.data.user.role
      };
    }

    // FAILURE CASES
    dispatch(loginFailure(res.data.message));

    return {
      success: false,
      message: res.data.message,
      action: res.data.action,
    };

  } catch (err) {
    const msg = err.response?.data?.message || "Login failed. Please try again.";

    dispatch(loginFailure(msg));

    return { success: false, message: msg };
  }
};


// export const loginAuth = (credentials) => async (dispatch) => {
//   dispatch(loginStart());

//   try {
//     const res = await axios.post("/login", credentials);

//     // --- NON-POSP USERS (redirect only, no redux login) ---
//     if (res.data.user_type === "non_posp") {
//       return {
//         success: true,
//         redirect_url: res.data,
//         action: res.data.action
//       };
//     }

//     // --- POSP USERS (normal login) ---
//     if (res.data.success) {
//       dispatch(loginSuccess({ token: res.data.token, user: res.data.user }));

//       return {
//         success: true,
//         redirect: res.data,
//         action: res.data.action,
//       };
//     }

//     // FAILURE CASES
//     dispatch(loginFailure(res.data.message));

//     return {
//       success: false,
//       message: res.data.message,
//       action: res.data.action,
//     };

//   } catch (err) {
//     const msg = err.response?.data?.message || "Login failed. Please try again.";

//     dispatch(loginFailure(msg));

//     return { success: false, message: msg };
//   }
// };


export const checkAuth = () => async (dispatch) => {
  const token = Cookies.get("authToken");
  const user = getDecryptedCookie("auth_info");

  if (token && user) {
    try {
      // Verify token with backend
      const response = await axios.get("/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data.success) {
        dispatch(loginSuccess({ token, user: response.data.user }));
      } else {
        // Token invalid
        Cookies.remove("authToken");
        removeCookie("auth_info");
        dispatch(logout());
      }
    } catch (error) {
      // Token invalid or expired
      Cookies.remove("authToken");
      removeCookie("auth_info");
      dispatch(logout());
    }
  } else {
    dispatch(logout());
  }
};





// 🔑 Logout action (API + frontend)
export const logoutUser = () => async (dispatch, getState) => {
  try {
    const { token } = getState().auth;

    // Call backend logout to invalidate token
    if (token) {
      await axios.post(
        "/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    }
  } catch (error) {
    // console.error("Logout API error:", error);
    // Continue frontend logout even if backend fails
  } finally {
    // Clean up cookies
    Cookies.remove("authToken", {
      path: "/",
      secure: true,
      sameSite: "None",
      domain:
        window.location.hostname === "localhost"
          ? undefined
          : ".notioninsurance.in",
    });
    removeCookie("auth_info");

    // Clear Redux state
    dispatch(logout());

    // 🔄 Force reload so all Redux state is reset
    window.location.href = "/"; 
    // or use: window.location.reload(); if you want a hard reset
  }
};