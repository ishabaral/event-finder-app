import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEvent from "./components/pages/AddEvent";
import EditDetails from "./components/pages/EditDetails";
import Home from "./components/pages/Home";
import HomeTwo from "./components/pages/HomeTwo";
import NotFound from "./components/pages/NotFound";
import ViewDetails from "./components/pages/ViewDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/homeTwo" component={HomeTwo} />
          <Route path="/addEvent" exact component={AddEvent} />
          <Route path="/viewDetails/:id">
            <ViewDetails />
          </Route>
          <Route path="/editDetails/:id">
            <EditDetails />
          </Route>
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
