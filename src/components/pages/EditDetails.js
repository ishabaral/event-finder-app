import { ErrorMessage } from "@hookform/error-message";
import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import "./addEvent.css";

function EditDetails() {
  const { id } = useParams();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const events = useSelector((state) => state.eventReducer.events);
  console.log(events);

  return (
    <div className="addEvent">
      {events
        .filter((event) => event.id == id)
        .map((event) => {
          return (
            <form
              key={event.id}
              className="box"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                value={event.title}
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
                value={event.startTime}
                {...register("startTime", {
                  required: "Start Time is required",
                  pattern: {
                    value: /((1[0-2]|0?[1-9]):([0-5][0-9]) ?([AaPp][Mm]))/,
                    message: "Must be in hr:min am or pm format",
                  },
                })}
                value={event.startTime}
                placeholder="Start Time"
              />
              <br />
              <div className="error-message">
                <ErrorMessage errors={errors} name="startTime" />
              </div>
              <br />
              <input
                value={event.description}
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
                value={event.author}
                type="text"
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
