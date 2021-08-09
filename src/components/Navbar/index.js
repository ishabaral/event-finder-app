import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
  return (
    <div className="nav-top">
      <Link class="heading" to="/">
        Event Finder App
      </Link>
      <Link className="add-event" to="/addEvent">
        Add Event
      </Link>
    </div>
  );
}

export default Navbar;
