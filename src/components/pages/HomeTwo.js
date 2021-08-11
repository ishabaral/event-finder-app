import React from "react";
import Modal from "react-modal";
import "./popUpStyle.css";
import { useSelector } from "react-redux";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function HomeTwo(props) {
  const { id, isModalOpen, modal } = props;
  const events = useSelector((state) => state.eventReducer.events);

  function closeModal() {
    modal(false);
  }

  return (
    <div>
      <Modal
        // className="pop-up"
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {events
          .filter((event) => event.id == id)
          .map((event) => {
            return (
              <div className="displayEvents">
                <h3>{event.title}</h3>
                <button onClick={closeModal}>
                  <i class="fas fa-times"></i>
                </button>
                <p>Date: {event.date}</p>
                <p>Start Time : {event.startTime}</p>
                <p>Description: {event.description}</p>
                <p>Author: {event.author}</p>
              </div>
            );
          })}
      </Modal>
    </div>
  );
}

export default HomeTwo;
