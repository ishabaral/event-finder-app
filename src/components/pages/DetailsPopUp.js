import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import "./popUpStyle.css";

function DetailsPopUp({ eventId }) {
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventReducer.events);
  console.log(eventId);

  return (
    <div className="modal">
      {events
        .filter((event) => event.id == { eventId })
        .map((event) => {
          return (
            <div key={event.id}>
              <h2>Title: {event.title}</h2>
            </div>
          );
        })}
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  );
}

export default DetailsPopUp;
