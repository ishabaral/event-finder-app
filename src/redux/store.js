import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchEvent } from "./actions";
import rootReducer from "./reducers";
import thunk from "redux-thunk";

import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
  key: "root",
  storage,
  // whiteList: ["isLogged"],
};
const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  pReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
// const persistor = persistStore(store);

store.dispatch(fetchEvent());
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
