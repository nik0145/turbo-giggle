import { LOGIN_REQUEST, LOGOUT_USER, LOGIN_USER } from '../constants/auth'
export const loginRequest = ({ username, password }) => {
  return {
    type: LOGIN_REQUEST,
    username,
    password,
  }
}
export const loginUser = (userObj) => ({
  type: LOGIN_USER,
  payload: userObj,
})
export const logoutUser = () => {
  localStorage.removeItem('token');
  return {
  type: LOGOUT_USER,
}
}
