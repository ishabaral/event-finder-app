import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import AddEvent from "./components/pages/AddEvent";
import EditDetails from "./components/pages/EditDetails";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

function App() {
  return (
    <div className="App">
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
    </div>
  );
}

export default App;
