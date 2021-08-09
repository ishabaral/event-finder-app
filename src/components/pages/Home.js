import React, { useState } from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { Link, useRouteMatch } from "react-router-dom";
import "./loadingStyle.css";
import DetailsPopUp from "./DetailsPopUp";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/actions";

function Home() {
  const { path, url } = useRouteMatch();

  const events = useSelector((state) => state.eventReducer.events);
  const loading = useSelector((state) => state.eventReducer.loading);
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();
  const [eventId, setEventId] = useState(0);

  return (
    <div className="home">
      <div class="tbl-header">
        <table
          className="home-table"
          cellpadding="0"
          cellSpacing="0"
          border="0"
        >
          <thead>
            <tr>
              <th>Id</th>
              <th>Event Title</th>
              <th>Start Time</th>
              <th>Author</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {loading ? (
              <div class="loading-screen">
                <div class="loading">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            ) : (
              events.map((event) => {
                return (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.startTime}</td>
                    <td>{event.author}</td>
                    <td>
                      <button
                        id={event.id}
                        onClick={(e) => {
                          dispatch(openModal());
                          setEventId(e.target.id);
                        }}
                      >
                        <i
                          style={{
                            color: "#7020ff",
                            padding: "0 10px",
                            fontSize: 20,
                          }}
                          class="far fa-eye"
                        ></i>
                      </button>
                      {isOpen ? <Link to={`${url}/${event.id}`} /> : ""}
                      <Link to={`/editDetails/${event.id}`}>
                        <i
                          style={{
                            color: "#7020ff",
                            padding: "0 10px",
                            fontSize: 20,
                          }}
                          class="far fa-edit"
                        ></i>
                      </Link>
                      <i
                        style={{
                          color: "red",
                          padding: "0 10px",
                          fontSize: 20,
                        }}
                        class="fas fa-trash-alt"
                      ></i>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Home;
