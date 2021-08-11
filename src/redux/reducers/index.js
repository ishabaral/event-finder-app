import { combineReducers } from "redux";
import eventReducer from "./eventReducer";

const allReducers = combineReducers({
  eventReducer: eventReducer,
});

export default allReducers;
