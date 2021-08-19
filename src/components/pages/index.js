import React from "react";
import { useSelector } from "react-redux";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import NotFound from "./NotFound";
import Navbar from "../Navbar";
import Home from "./Home";
import AddEditEvent from "./AddEditEvent";

function Pages() {
  const isLogged = useSelector((state) => state.isLogged);

  if (isLogged === false) {
    <Redirect to="/login" />;
  }
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path="/reload" component={null} key="reload" />
        <Route path="/" exact component={Home} />
        <Route path="/addEvent" component={AddEditEvent} />
        <Route path="/addEditEvent/:id">
          <AddEditEvent />
        </Route>
        <Route component={NotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default Pages;
