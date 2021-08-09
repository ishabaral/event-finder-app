import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ViewDetails() {
  const { id } = useParams();
  const events = useSelector((state) => state.eventReducer.events);
  return (
    <div className="viewDetails">
      {events
        .filter((event) => event.id == id)
        .map((event) => {
          return (
            <div>
              <h3>Event Id: {event.id} </h3>
              <table className="details-table">
                <tbody>
                  <tr>
                    <th>Event Title</th>
                    <td>{event.title}</td>
                  </tr>
                  <tr>
                    <th>Start Time</th>
                    <td>{event.startTime}</td>
                  </tr>
                  <tr>
                    <th>Desription</th>
                    <td>{event.description}</td>
                  </tr>
                  <tr>
                    <th>Author</th>
                    <td>{event.author}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
    </div>
  );
}

export default ViewDetails;
