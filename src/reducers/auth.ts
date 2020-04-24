import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../constants/auth";
const getUser = () => {
  try {
    const serializedState = localStorage.getItem('user');
    if (serializedState === null) {
      return {};
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return {};
  }
}; 
const initialState = {
  isLoading: false,
  keeek: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errors: null,
  currentUser: getUser()
};
// export const isBrowser = () => typeof window !== "undefined"


// const setUser = user =>
//   window.localStorage.setItem("gatsbyUser", JSON.stringify(user))


const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        keeek: true,
        isAuthenticated: false,

      }
    case LOGOUT_SUCCESS:
      return { ...state, currentUser: {} }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        errors: null,
        currentUser: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        errors: action.errors,
      };
    default:
      return state;
  }
};
export default reducer;
