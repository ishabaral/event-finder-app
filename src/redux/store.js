import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { fetchEvent } from "./actions";
import allReducers from "./reducers";
import thunk from "redux-thunk";

const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

store.dispatch(fetchEvent());
store.subscribe(() => {
  console.log(store.getState());
});

export default store;
