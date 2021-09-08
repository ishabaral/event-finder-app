import {
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  LOG_IN,
  LOG_OUT,
} from "./actionTypes";

export const logIn = () => {
  return {
    type: LOG_IN,
  };
};

export const logOut = () => {
  return {
    type: LOG_OUT,
  };
};

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST,
  };
};

export const fetchUserSuccess = (users) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: users,
  };
};

export const fetchUsersFailure = (err) => {
  return {
    type: FETCH_USER_FAILURE,
    payload: err,
  };
};

export const fetchEventRequest = () => {
  return {
    type: FETCH_EVENT_REQUEST,
  };
};

export const fetchEventSuccess = (events) => {
  return {
    type: FETCH_EVENT_SUCCESS,
    payload: events,
  };
};

export const fetchEventFailure = (error) => {
  return {
    type: FETCH_EVENT_FAILURE,
    payload: error,
  };
};
