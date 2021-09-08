import { LOG_IN, LOG_OUT } from "../actions/actionTypes";

const initialAction = {
  isLogged: false,
};

function authReducer(state = initialAction, action) {
  switch (action.type) {
    case LOG_IN:
      return { isLogged: true };
    case LOG_OUT:
      return { isLogged: false };
    default:
      return state;
  }
}

export default authReducer;
