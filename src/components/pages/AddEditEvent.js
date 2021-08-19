import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { fetchEvent } from "../../redux/actions";
import "./addEvent.css";
import { dateOptions, timeOptions } from "./dateTime";

function AddEditEvent() {
  const dispatch = useDispatch();
  const history = useHistory();
  const { id } = useParams();
  const location = useLocation();
  const [dateTime, setDateTime] = useState(
    location.state.event ? new Date(location.state.event.dateTime) : new Date()
  );

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    const event = {
      title: data.title,
      dateTime: dateTime,
      date: `${dateTime.toLocaleDateString("en-US", dateOptions)}`,
      startTime: `${dateTime.toLocaleTimeString("en-US", timeOptions)}`,
      description: data.description,
      author: data.author,
    };
    e.preventDefault();
    if (location.state.event) {
      await axios.patch(`http://localhost:4000/events/${id}`, event, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    } else {
      await axios.post("http://localhost:4000/events", event, {
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
    dispatch(fetchEvent());
    history.push("/");
  };

  return (
    <div className="addEditEvent">
      <form
        key={location.state.event ? location.state.event.id : ""}
        className="event-box"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>{location.state.event ? "Edit Event" : "Add Event"}</h2>
        <label>Title</label>
        {console.log(location.state.event ? location.state.event.title : "")}
        <input
          className="event-input"
          defaultValue={location.state.event ? location.state.event.title : ""}
          {...register("title", {
            required: "Title is required",
          })}
          placeholder="Enter the title of your Event"
        />
        <br />
        <div className="error-message">
          <ErrorMessage errors={errors} name="title" />
        </div>
        <br />
        <label>Description</label>
        <input
          className="event-input"
          defaultValue={
            location.state.event ? location.state.event.description : ""
          }
          {...register("description", {
            required: "Description must not be empty",
            minLength: {
              value: 30,
              message: "Write at least 30 letters",
            },
          })}
          placeholder="Description"
        />
        <br />
        <div className="error-message">
          <ErrorMessage errors={errors} name="description" />
        </div>
        <br />
        <label>Date and Time</label>
        <DateTimePicker
          className="date-time"
          value={dateTime}
          onChange={setDateTime}
          required
        />
        <label>Author</label>
        <input
          className="event-input"
          defaultValue={
            location.state.event ? location.state.event.author : " "
          }
          type="text"
          {...register("author")}
          placeholder="Author (optional)"
        />
        <br />

        <input
          className="event-submit"
          type="Submit"
          value={location.state.event ? "Edit Event" : "Add Event"}
        />
      </form>
    </div>
  );
}

export default AddEditEvent;
