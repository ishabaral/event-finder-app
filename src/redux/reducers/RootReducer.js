import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  eventReducer: eventReducer,
  authReducer: authReducer,
});

export default rootReducer;
