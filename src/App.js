import React from "react";
import LoginRegister from "./components/loginRegister/LoginRegister";
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import PrivateRoute from "./components/Routes/privateRoute";
import PublicRoute from "./components/Routes/publicRoute";
import Home from "./components/home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <PublicRoute
            restricted={false}
            exact
            path="/registro"
            component={LoginRegister}
          ></PublicRoute>
          <PublicRoute
            restricted={false}
            path="/welcome"
            component={Welcome}
          ></PublicRoute>
          <PrivateRoute component={Home} path="/" exact></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
