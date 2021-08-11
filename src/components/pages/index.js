import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AddEvent from "./AddEvent";
import EditDetails from "./EditDetails";
import NotFound from "./NotFound";
import Navbar from "../Navbar";
import Home from "./Home";

function Pages() {
  const isLogged = useSelector((state) => state.isLogged);

  if (isLogged == false) {
    <Redirect to="/login" />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/addEvent" exact component={AddEvent} />
        <Route path="/editDetails/:id">
          <EditDetails />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
