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
  const [modalEventId, setModalEventId] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:4000/events/${id}`);
    dispatch(fetchEvent());
  };

  const modal = (t) => {
    setIsModalOpen(t);
  };

  const handlePopUp = (id) => {
    modal(true);
    setModalEventId(id);
  };

  return (
    <div className="home">
      <div class="tbl-header">
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
                    <td>{event.date}</td>
                    <td>{event.startTime}</td>
                    <td className="actions">
                      <a onClick={() => handlePopUp(event.id)}>
                        <i class="far fa-eye"></i>
                      </a>
                      <Link to={`/editDetails/${event.id}`}>
                        <i class="far fa-edit"></i>
                      </Link>
                      <a onClick={() => handleDelete(event.id)}>
                        <i class="fas fa-trash-alt"></i>
                      </a>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
        <Popup id={modalEventId} isModalOpen={isModalOpen} modal={modal} />
      </div>
    </div>
  );
}

export default Home;
