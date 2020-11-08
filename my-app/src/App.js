import React from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import "./App.css";
import LoginRegister from "./components/loginRegister";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
