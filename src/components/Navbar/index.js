import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { logOut } from "../../redux/actions";
import { fetchUsers } from "../../redux/actions/fetchUsers";
import "./style.css";

function Navbar() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => {
    if (window.confirm("Do you want to logout?")) {
      dispatch(logOut());
      dispatch(fetchUsers());
      localStorage.removeItem("user");
      history.push("/login");
    }
  };
  const handleLinkClick = () => {
    setResponsive(false);
    window.location.assign("/addEvent");
  };

  useEffect(() => {
    const handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        setResponsive(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
    <div ref={menuRef} className={`nav-top ${responsive ? "responsive" : ""}`}>
      <Link className="heading" to="/">
        Event Finder App
      </Link>
      <div className="menu-items">
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
        <Link
          className="add-event"
          to={{
            pathname: "/addEvent",
            state: "addEvent",
          }}
          onClick={() => handleLinkClick()}
        >
          Add Event
        </Link>
      </div>
      <div className="icon" onClick={() => setResponsive(!responsive)}>
        <i className="fa fa-bars"></i>
      </div>
    </div>
  );
}

export default Navbar;
