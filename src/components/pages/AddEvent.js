import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import "./addEvent.css";

function AddEvent() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);

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
