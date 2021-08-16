import { combineReducers } from "redux";
import eventReducer from "./eventReducer";
import isLogged from "./isLogged";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";

// const persistConfig = {
//   key: "root",
//   storage,
//   whiteList: ["isLogged"],
// };

const rootReducer = combineReducers({
  eventReducer: eventReducer,
  isLogged: isLogged,
});

export default rootReducer;

// export default persistReducer(persistConfig, rootReducer);
