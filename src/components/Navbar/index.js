import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, Redirect, useHistory } from "react-router-dom";
import { logOut } from "../../redux/actions";
import "./style.css";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();

  const handleLogout = () => {
    dispatch(logOut());
    console.log(isLoggedIn);
    debugger;
    history.push("/login");
  };
  return (
    <div className="nav-top">
      <Link className="heading" to="/">
        Event Finder App
      </Link>
      <button className="add-event" onClick={handleLogout}>
        Logout
      </button>
      <Link className="add-event" to="/addEvent">
        Add Event
      </Link>
    </div>
  );
}

export default Navbar;
