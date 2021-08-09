import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import isOpen from "./isOpen";

const allReducers = combineReducers({
  eventReducer: eventReducer,
  isOpen: isOpen,
});

export default allReducers;
