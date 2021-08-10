import { ErrorMessage } from "@hookform/error-message";
import axios from "axios";
import React, { useState } from "react";
import { set, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import "./addEvent.css";

function AddEvent() {
  const history = useHistory();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const onSubmit = async (data, e) => {
    const events = {
      title: data.title,
      date: data.date,
      startTime: data.startTime,
      description: data.startTime,
      author: data.author,
    };
    e.preventDefault();
    await axios.post("http://localhost:4000/events", events, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    history.push("/");
  };

  return (
    <div className="addEvent">
      <form className="box" onSubmit={handleSubmit(onSubmit)}>
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
          {...register("date", {
            required: "Date is required",
            pattern: {
              value: /(?=.*[0-9])/,
              message: "Must include some number",
            },
          })}
          placeholder="Date"
        />
        <br />
        <div className="error-message">
          <ErrorMessage errors={errors} name="date" />
        </div>
        <br />
        <input
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
        <input type="text" placeholder="Author (optional)" />
        <br />
        <input type="Submit" value="Add Event" />
      </form>
    </div>
  );
}

export default AddEvent;
