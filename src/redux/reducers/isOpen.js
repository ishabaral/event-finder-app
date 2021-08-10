import React from "react";
import { CLOSE, OPEN } from "../actions/actionTypes";
const initialState = {
  isOpened: false,
  currentId: 0,
};

function isOpen(state = initialState, action) {
  switch (action.type) {
    case OPEN:
      return {
        isOpened: true,
        currentId: action.payload,
      };
    case CLOSE:
      return { ...state, isOpened: false };
    default:
      return state;
  }
}

export default isOpen;
