import React from "react";
import LoginRegister from "./components/loginRegister/LoginRegister";
import Welcome from "./components/welcome/Welcome";

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
          <Route exact path="/login-register" component={LoginRegister}></Route>
          <Route path="/welcome" component={Welcome}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
