import React, { useEffect, useRef, useState } from "react";
// import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { Link, useHistory, useLocation } from "react-router-dom";
import { logOut } from "../../redux/actions";
import "./style.css";

function Navbar() {
  // const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const dispatch = useDispatch();
  const history = useHistory();
  const [responsive, setResponsive] = useState(false);
  const menuRef = useRef();
  const location = useLocation();

  const handleLogout = () => {
    dispatch(logOut());
    // console.log(isLoggedIn);
    history.push("/login");
  };
  const handleLinkClick = () => {
    setResponsive(false);
    location.reload();
    // history.go(1)
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
      <button onClick={handleLogout}>Logout</button>
      <Link
        className="add-event"
        to={{
          pathname: "/addEditEvent",
          state: "addEvent",
        }}
        onClick={() => handleLinkClick()}
      >
        Add Event
      </Link>
      <a className="icon" onClick={() => setResponsive(!responsive)}>
        <i className="fa fa-bars"></i>
      </a>
    </div>
  );
}

export default Navbar;
