import axios from "axios";
import { FAIL, GET_CURRENT, LOGIN, LOGOUT, REGISTER } from "../types/Authtype";

export const register = (newUser) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signUp", newUser);
    dispatch({ type: REGISTER, payload: res.data });
    
    
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const login = (user, Navigate) => async (dispatch) => {
  try {
    const res = await axios.post("/user/signIn", user);
    
    dispatch({ type: LOGIN, payload: res.data });

    Navigate("/Profile");
  } catch (error) {
    dispatch({ type: FAIL, payload: error.response.data });
  }
};
export const getCurrent = () => async (dispatch) => {
  var token = localStorage.getItem("token");

  const config = {
    headers: {
      authorization: token,
    },
  };

  try {
    const res = await axios.get("/user/current", config);
    console.log(res.data);
    dispatch({ type: GET_CURRENT, payload: res.data });
  } catch (error) {
    // dispatch({ type: FAIL, payload: error.response.data });
    console.log(error);
  }
};
export const logout = (Navigate) => {
  Navigate("/");
  return {
    type: LOGOUT,
  };
};
