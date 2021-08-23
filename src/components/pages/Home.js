import React, { useState } from "react";
import "./home.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "./loadingStyle.css";
import { useDispatch } from "react-redux";
import axios from "axios";
import { fetchEvent } from "../../redux/actions";
import Popup from "./Popup";

function Home() {
  const events = useSelector((state) => state.eventReducer.events);
  const loading = useSelector((state) => state.eventReducer.loading);
  const dispatch = useDispatch();
  const [modalEvent, setModalEvent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sortByDate = (arr) => {
    const sorter = (a, b) => {
      return new Date(a.dateTime).getTime() - new Date(b.dateTime).getTime();
    };
    events.sort(sorter);
  };
  sortByDate(events);

  const handleDelete = async (id) => {
    if (window.confirm("Do you want to delete?")) {
      await axios.delete(`http://localhost:4000/events/${id}`);
      dispatch(fetchEvent());
    }
  };

  const modal = (t) => {
    setIsModalOpen(t);
  };

  const handlePopUp = (event) => {
    modal(true);
    setModalEvent(event);
  };

  return (
    <div className="home">
      <div className="tbl-header">
        <table className="home-table">
          <thead>
            <tr>
              <th>Id</th>
              <th>Event Title</th>
              <th>Date</th>
              <th>Start Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {!loading &&
              events.map((event) => {
                return (
                  <tr key={event.id}>
                    <td>{event.id}</td>
                    <td>{event.title}</td>
                    <td>{event.date}</td>
                    <td>{event.startTime}</td>
                    <td className="actions">
                      <button onClick={() => handlePopUp(event)}>
                        <i className="fa fa-eye"></i>
                      </button>
                      <Link
                        to={{
                          pathname: `/addEditEvent/${event.id}`,
                          state: { event },
                        }}
                      >
                        <i className="fa fa-edit"></i>
                      </Link>
                      <button onClick={() => handleDelete(event.id)}>
                        <i className="fa fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
        {loading && (
          <div className="loading-screen">
            <div className="loading">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        )}
        <Popup event={modalEvent} isModalOpen={isModalOpen} modal={modal} />
      </div>
    </div>
  );
}

export default Home;
