// PospSignUpAction.js
import axios from "../../config/axios";
import { signupStart, signupSuccess, signupFailure } from "../reducers/PospSignUpInSlice";

export const registerUser = (userData) => async (dispatch) => {
  dispatch(signupStart());

  try {
    const response = await axios.post("/register", userData);

    if (response.data.success) {
      dispatch(signupSuccess(response.data)); 
      return response.data;
    } else {
      // Pass the entire error response including errors object
      dispatch(signupFailure({
        message: response.data.message,
        errors: response.data.errors || {}
      }));
      return response.data;
    }
  } catch (error) {
    const errorMsg = error.response?.data?.message || "Registration failed";
    const fieldErrors = error.response?.data?.errors || {};
    
    dispatch(signupFailure({
      message: errorMsg,
      errors: fieldErrors
    }));
  }
};