import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_SUCCESS,
} from "../constants/auth";

const initialState = {
  isLoading: false,
  keeek: false,
  isAuthenticated: localStorage.getItem('token') ? true : false,
  errors: null,
  currentUser: {kek:'kek'},
};
const reducer = (state = initialState, action: any): any => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true,
        keeek:true,
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
