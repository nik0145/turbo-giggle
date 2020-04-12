import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_USER, LOGOUT_USER } from "../constants/auth";
const initialState = {
  loading: false,
  loaded: false,
  errors: [],
  currentUser: {},
};
const reducer = (state = initialState, action: any): any => {
  const { response, errors } = action;
  switch (action.type) {
    case LOGIN_USER:
      return { ...state, currentUser: action.payload }
    case LOGIN_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };
    case LOGOUT_USER:
      return { ...state, currentUser: {} }
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        token: response.token,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        loaded: false,
        errors,
      };
    default:
      return state;
  }
};
export default reducer;
