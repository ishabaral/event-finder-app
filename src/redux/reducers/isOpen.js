import React from "react";
import { CLOSE, OPEN } from "../actions/actionTypes";

function isOpen(state = false, action) {
  switch (action.type) {
    case OPEN:
      return true;
    case CLOSE:
      return false;
    default:
      return state;
  }
}

export default isOpen;
