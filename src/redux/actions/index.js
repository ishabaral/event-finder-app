import axios from "axios";
import {
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  LOG_IN,
  LOG_OUT,
} from "./actionTypes";

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

export const fetchEvent = () => {
  return function (dispatch) {
    dispatch(fetchEventRequest());
    axios
      .get("http://localhost:4000/events")
      .then((res) => {
        const event = res.data;
        // console.log(event);
        dispatch(fetchEventSuccess(event));
      })
      .catch((err) => {
        dispatch(fetchEventFailure(err.message));
      });
  };
};
