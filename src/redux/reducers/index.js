import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import isLogged from "./isLogged";

const allReducers = combineReducers({
  eventReducer: eventReducer,
  isLogged: isLogged,
});

export default allReducers;
