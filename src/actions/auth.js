import {
  LOGIN_REQUEST,
  LOGOUT_SUCCESS,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
} from '../constants/auth';

export const loginRequest = ({ username, password }) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  };
};
export const receiveLogin = (user) => ({
  type: LOGIN_SUCCESS,
  payload: user,
});

export const loginError = (message) => ({
  type: LOGIN_FAILURE,
  payload: message,
});
export const logoutUser = () => {
  return {
    type: LOGOUT_SUCCESS,
  };
};
