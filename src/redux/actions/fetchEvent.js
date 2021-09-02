import axios from "axios";
import { fetchEventFailure, fetchEventRequest, fetchEventSuccess } from ".";

export const fetchEvent = () => {
  return function (dispatch) {
    dispatch(fetchEventRequest());
    axios
      .get("http://localhost:4000/events")
      .then((res) => {
        const event = res.data;
        dispatch(fetchEventSuccess(event));
      })
      .catch((err) => {
        dispatch(fetchEventFailure(err.message));
      });
  };
};
