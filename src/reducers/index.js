import { combineReducers } from "redux";
import auth from "./auth";
import counterReducer from './counter'


const rootReducer = combineReducers({
  auth,
  counterReducer,
})
export default rootReducer;
