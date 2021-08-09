import {
  FETCH_EVENT_FAILURE,
  FETCH_EVENT_REQUEST,
  FETCH_EVENT_SUCCESS,
} from "../actions/actionTypes";

const initialState = {
  loading: true,
  events: [],
  error: "",
};

function eventReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_EVENT_REQUEST:
      return { ...state, loading: true };
    case FETCH_EVENT_SUCCESS:
      return {
        loading: false,
        events: action.payload,
        error: "",
      };
    case FETCH_EVENT_FAILURE:
      return {
        loading: false,
        events: [],
        error: action.payload,
      };
    default:
      return state;
  }
}

export default eventReducer;
