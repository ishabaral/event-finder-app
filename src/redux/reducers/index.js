import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import isLogged from "./isLogged";

const rootReducer = combineReducers({
  eventReducer: eventReducer,
  isLogged: isLogged,
});

export default rootReducer;
