import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import DateTimePicker from "react-datetime-picker/dist/DateTimePicker";
import { useForm } from "react-hook-form";
import { useLocation, useParams } from "react-router-dom";
import { fetchEvent } from "../../redux/actions";
import "./addEvent.css";
import myHOC from "./myHOC";

function AddEditEvent(props) {
  const { dateOptions, timeOptions, dispatch, history } = props;
  const { id } = useParams();
  const location = useLocation();
  const { event } = location.state;
  const [dateTime, setDateTime] = useState(new Date(event.dateTime));
  // console.log(location.state);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    const changedEvent = {
      title: data.title,
      dateTime: dateTime,
      date: `${dateTime.toLocaleDateString("en-US", dateOptions)}`,
      startTime: `${dateTime.toLocaleTimeString("en-US", timeOptions)}`,
      description: data.description,
      author: data.author,
    };
    e.preventDefault();
    await axios.patch(`http://localhost:4000/events/${id}`, changedEvent, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(fetchEvent());
    history.push("/");
  };

  return (
    <div className="editDetails">
      <form
        key={event.id}
        className="event-box"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h2>Edit Event</h2>
        <label>Title</label>
        <input
          defaultValue={event.title}
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
          defaultValue={event.description}
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
          defaultValue={event.author}
          type="text"
          {...register("author")}
          placeholder="Author (optional)"
        />
        <br />

        <input type="Submit" value="Edit Event" />
      </form>
    </div>
  );
}

export default myHOC(AddEditEvent);