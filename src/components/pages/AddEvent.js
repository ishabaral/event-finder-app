import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchEvent, fetchEventSuccess } from "../../redux/actions";
import "./addEvent.css";
import DateTimePicker from "react-datetime-picker";

function AddEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dateTime, onChange] = useState(new Date());

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    console.log(dateTime);
    const events = {
      title: data.title,
      dateTime: dateTime,
      date: data.date,
      startTime: data.startTime,
      description: data.description,
      author: data.author,
    };
    e.preventDefault();

    await axios.post("http://localhost:4000/events", events, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    dispatch(fetchEvent());
    history.push("/");
  };

  return (
    <div className="addEvent">
      <form className="event-box" onSubmit={handleSubmit(onSubmit)}>
        <h2>Add Event </h2>
        <input
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
        <DateTimePicker
          className="date-time"
          value={dateTime}
          onChange={onChange}
        />
        <input
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
        <input
          type="text"
          {...register("author")}
          placeholder="Author (optional)"
        />
        <br />
        <input type="Submit" value="Add Event" />
      </form>
    </div>
  );
}

export default AddEvent;
