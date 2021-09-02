import { useSelector } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Pages from "./components/pages";
import LoginRegister from "./components/pages/LoginRegister";
import NotFound from "./components/pages/NotFound";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const isLogged = useSelector((state) => state.authReducer.isLogged);
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" exact component={LoginRegister} />
          <Route path="/register" component={LoginRegister} />
          <ProtectedRoute path="/" isLogged={isLogged} component={Pages} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
