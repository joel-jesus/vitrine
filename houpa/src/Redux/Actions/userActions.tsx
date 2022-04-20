import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST,
  USER_DETAILS_RESET,
  USER_DETAILS_SUCCESS,
  USER_LOGIN_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_SUCCESS,
  USER_LOGOUT,
  USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_UPDATE_PROFILE_FAIL,
  USER_UPDATE_PROFILE_REQUEST,
  USER_UPDATE_PROFILE_SUCCESS,
} from "../Constants/UserContants";
import axios from "axios";

// LOGIN
export const login =
  (email: any, password: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch({ type: USER_LOGIN_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/users/login`,
        { email, password },
        config
      );
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data });

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      dispatch({
        type: USER_LOGIN_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// LOGOUT
export const logout = () => (dispatch: (arg0: { type: string }) => void) => {
  localStorage.removeItem("userInfo");
  dispatch({ type: USER_LOGOUT });
  dispatch({ type: USER_DETAILS_RESET });
};

// REGISTER
export const register =
  (name: any, email: any, password: any) =>
  async (dispatch: (arg0: { type: string; payload?: any }) => void) => {
    try {
      dispatch({ type: USER_REGISTER_REQUEST });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { data } = await axios.post(
        `/api/users`,
        { name, email, password },
        config
      );
      dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
    } catch (error: any) {
      dispatch({
        type: USER_REGISTER_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

// USER DETAILS
export const getUserDetails =
  (id: any) =>
  async (
    dispatch: (arg0: {
      (dispatch: any): void;
      type?: string;
      payload?: any;
    }) => void,
    getState: () => { userLogin: { userInfo: any } }
  ) => {
    try {
      dispatch({ type: USER_DETAILS_REQUEST } as any);
      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.get(`/api/users/${id}`, config);
      dispatch({ type: USER_DETAILS_SUCCESS, payload: data } as any);
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_DETAILS_FAIL,
        payload: message,
      } as any);
    }
  };

// UPDATE PROFILE
export const updateUserProfile =
  (user: any) =>
  async (
    dispatch: (arg0: {
      (dispatch: any): void;
      type?: string;
      payload?: any;
    }) => void,
    getState: () => { userLogin: { userInfo: any } }
  ) => {
    try {
      dispatch({ type: USER_UPDATE_PROFILE_REQUEST } as any);

      const {
        userLogin: { userInfo },
      } = getState();

      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${userInfo.token}`,
        },
      };

      const { data } = await axios.put(`/api/users/profile`, user, config);
      dispatch({ type: USER_UPDATE_PROFILE_SUCCESS, payload: data } as any);
      dispatch({ type: USER_LOGIN_SUCCESS, payload: data } as any);

      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error: any) {
      const message =
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message;
      if (message === "Not authorized, token failed") {
        dispatch(logout());
      }
      dispatch({
        type: USER_UPDATE_PROFILE_FAIL,
        payload: message,
      } as any);
    }
  };
