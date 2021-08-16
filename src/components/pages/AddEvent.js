import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { fetchEvent, fetchEventSuccess } from "../../redux/actions";
import "./addEvent.css";
import DateTimePicker from "react-datetime-picker";

function AddEvent() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [dateTime, setDateTime] = useState(new Date());
  const isLogged = useSelector((state) => state.isLogged);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  console.log(isLogged);
  const onSubmit = async (data, e) => {
    const dateOptions = {
      year: "numeric",
      month: "short",
      day: "numeric",
      weekday: "short",
    };
    const timeOptions = {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
      hourCycle: "h12",
    };

    const events = {
      title: data.title,
      dateTime: dateTime,
      date: `${dateTime.toLocaleDateString("en-US", dateOptions)}`,
      startTime: `${dateTime.toLocaleTimeString("en-US", timeOptions)}`,
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
        <DateTimePicker
          className="date-time"
          value={dateTime}
          onChange={setDateTime}
          required
        />
        <input type="Submit" value="Add Event" />
      </form>
    </div>
  );
}

export default AddEvent;
