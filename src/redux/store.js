import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchEvent } from "./actions/fetchEvent";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import persistReducer from "redux-persist/es/persistReducer";
import persistStore from "redux-persist/es/persistStore";
import authReducer from "./reducers/authReducer";
import userReducer from "./reducers/userReducer";
import eventReducer from "./reducers/eventReducer";
import { fetchUsers } from "./actions/fetchUsers";

const persistConfig = {
  key: "root",
  storage,
  whiteList: ["isLogged"],
};

const rootReducer = combineReducers({
  authReducer: persistReducer(persistConfig, authReducer),
  userReducer: userReducer,
  eventReducer: eventReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
const persistor = persistStore(store);

store.dispatch(fetchEvent());
store.dispatch(fetchUsers());
// store.subscribe(() => {
//   console.log(store.getState());
// });

persistor.persist = function () {
  store.dispatch({
    // type: _constants.PERSIST,
    // register: register,
    rehydrate: true,
  });
};

export { store, persistor };
