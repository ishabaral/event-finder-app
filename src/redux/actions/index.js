import axios from "axios";
import {
  CLOSE,
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
  OPEN,
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

export const fetchEvent = () => {
  return function (dispatch) {
    dispatch(fetchEventRequest());
    axios
      .get("http://localhost:4000/events")
      .then((res) => {
        const event = res.data;
        console.log(event);
        dispatch(fetchEventSuccess(event));
      })
      .catch((err) => {
        dispatch(fetchEventFailure(err.message));
      });
  };
};
