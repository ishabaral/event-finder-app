import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { fetchEvent } from "../../redux/actions";
import "./addEvent.css";

function EditDetails() {
  const { id } = useParams();
  const history = useHistory();
  const dispatch = useDispatch();

  const events = useSelector((state) => state.eventReducer.events);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    const changedEvent = {
      title: data.title,
      date: data.date,
      startTime: data.startTime,
      description: data.description,
      author: data.author,
    };
    console.log(data);
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
      {events
        .filter((event) => event.id == id)
        .map((event) => {
          return (
            <form
              key={event.id}
              className="event-box"
              onSubmit={handleSubmit(onSubmit)}
            >
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
              <input
                {...register("date", {
                  required: "Date is required",
                  pattern: {
                    value: /(?=.*[0-9])/,
                    message: "Must include some number",
                  },
                })}
                defaultValue={event.date}
                placeholder="Date"
              />
              <br />
              <div className="error-message">
                <ErrorMessage errors={errors} name="date" />
              </div>
              <br />
              <input
                defaultValue={event.startTime}
                {...register("startTime", {
                  required: "Start Time is required",
                  pattern: {
                    value: /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/,
                    message: "Must be in hr:min am or pm format",
                  },
                })}
                placeholder="Start Time"
              />
              <br />
              <div className="error-message">
                <ErrorMessage errors={errors} name="startTime" />
              </div>
              <br />
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
              <input
                defaultValue={event.author}
                type="text"
                {...register("author")}
                placeholder="Author (optional)"
              />
              <br />
              <input type="Submit" value="Edit Event" />
            </form>
          );
        })}
    </div>
  );
}

export default EditDetails;
