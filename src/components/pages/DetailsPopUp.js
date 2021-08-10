import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/actions";
import "./popUpStyle.css";

function DetailsPopUp() {
  const currentId = useSelector((state) => state.isOpen.currentId);
  const dispatch = useDispatch();
  const events = useSelector((state) => state.eventReducer.events);
  console.log(currentId);

  return (
    <div className="modal">
      {events
        .filter((event) => event.id == currentId)
        .map((event) => {
          return (
            <div key={event.id}>
              <h2>Title: {event.title}</h2>
              <p>Start time: {event.startTime}</p>
            </div>
          );
        })}
      <button onClick={() => dispatch(closeModal())}>Close</button>
    </div>
  );
}

export default DetailsPopUp;
