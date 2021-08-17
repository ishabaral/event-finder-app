import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Pages from "./components/pages";
import Login from "./components/pages/Login";
import NotFound from "./components/pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLogged = useSelector((state) => state.isLogged);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={Login} />
          <ProtectedRoute path="/" isLogged={isLogged} component={Pages} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
