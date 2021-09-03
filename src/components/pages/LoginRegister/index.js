import React, { useState } from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../../redux/actions";
import { Link, useHistory, useLocation } from "react-router-dom";
import { toast } from "react-toastify";
import axios from "axios";

function LoginRegister() {
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  const users = useSelector((state) => state.userReducer.users);
  const [passwordVisibility, setPasswordVisibility] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const togglePasswordVisibility = () => {
    setPasswordVisibility(!passwordVisibility);
  };

  const onSubmit = (data) => {
    if (location.state == "register") {
      const sameEmail = users.find((user) => data.email == user.email);
      if (sameEmail) {
        toast.warn("Email already exists! Please choose a unique email");
      } else {
        const newUser = {
          email: data.email,
          password: data.password,
        };
        axios.post("http://localhost:4000/users", newUser, {
          headers: {
            "Content-type": "application/json",
          },
        });
        dispatch(logIn());
        localStorage.setItem("user", JSON.stringify(newUser));
        history.push("/");
      }
    } else {
      const registeredUser = users.find(
        (user) => data.email == user.email && data.password == user.password
      );
      if (registeredUser) {
        dispatch(logIn());
        localStorage.setItem("user", JSON.stringify(registeredUser));
        history.push("/");
      } else {
        toast.warn("Not a registered user");
      }
    }
  };

  return (
    <div>
      <div className="login">
        <form className="box" onSubmit={handleSubmit(onSubmit)}>
          <h1>Event Finder App</h1>
          <input
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email must not be empty",
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Must contain @ numbers . and alphabets",
              },
            })}
          />
          <br />
          <div style={{ color: "red" }}>
            <ErrorMessage errors={errors} name="email" />
          </div>

          <br />
          <div className="password-wrapper">
            <input
              type={passwordVisibility ? "text" : "password"}
              placeholder="Password"
              {...register("password", {
                required: "Password must not be empty",
                pattern: {
                  value: /(?=.*[0-9])/,
                  message: "must contain some number",
                },
              })}
            />
            <a onClick={togglePasswordVisibility}>
              {passwordVisibility ? (
                <i className="fa fa-eye password-eye" aria-hidden="true"></i>
              ) : (
                <i
                  className="fa fa-eye-slash password-eye"
                  aria-hidden="true"
                ></i>
              )}
            </a>
          </div>
          <br />
          <div style={{ color: "red" }}>
            <ErrorMessage errors={errors} name="password" />
          </div>
          <br />
          <input
            type="submit"
            name=""
            value={location.state == "register" ? "Register" : "Login"}
          />
          {location.state == "register" ? (
            <Link
              to={{
                pathname: "/login",
                state: "login",
              }}
              className="register-login-link"
            >
              Login
            </Link>
          ) : (
            <Link
              to={{
                pathname: "/register",
                state: "register",
              }}
              className="register-login-link"
            >
              Not yet user? Register
            </Link>
          )}
        </form>
      </div>
    </div>
  );
}

export default LoginRegister;
