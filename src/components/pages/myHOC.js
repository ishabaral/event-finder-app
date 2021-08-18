import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

function myHOC(WrappedComponent) {
  function MyHOC() {
    const history = useHistory();
    const dispatch = useDispatch();

    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      hourCycle: "h12",
    };
    const events = (data, datetime) => {
      return {
        title: data.title,
        dateTime: datetime,
        date: `${datetime.toLocaleDateString("en-US", dateOptions)}`,
        startTime: `${datetime.toLocaleTimeString("en-US", timeOptions)}`,
        description: data.description,
        author: data.author,
      };
    };

    return (
      <WrappedComponent
        dateOptions={dateOptions}
        timeOptions={timeOptions}
        events={events}
        history={history}
        dispatch={dispatch}
      />
    );
  }
  return MyHOC;
}

export default myHOC;
