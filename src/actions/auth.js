import { LOGIN_REQUEST } from "../constants/auth";
export const loginRequest = ({ username, password }) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  };
};
