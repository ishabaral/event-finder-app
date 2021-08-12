import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../redux/actions";
import "./style.css";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);

  const handleLogout = () => {
    dispatch(logOut());
    console.log(isLoggedIn);
    history.push("/login");
  };

  return (
    <div className={`nav-top ${responsive ? "responsive" : ""}`}>
      <Link className="heading" to="/" onClick={() => setResponsive(false)}>
        Event Finder App
      </Link>
      <button onClick={handleLogout}>Logout</button>
      <Link className="add-event" to="/addEvent">
        Add Event
      </Link>
      <a className="icon" onClick={() => setResponsive(!responsive)}>
        <i class="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
