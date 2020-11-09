import React, { useState } from "react";
import LoginRegister from "./components/loginRegister/LoginRegister";
import Welcome from "./components/welcome/Welcome";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useSelector } from "react-redux";
import PrivateRoute from "./components/Routes/privateRoute";
import Home from "./components/home/Home";

function App() {
  let loginData = useSelector((state) => state.loginReducer);
  const [isLogin, setIsLogin] = useState("false");

  loginData.token !== undefined ? setIsLogin(true) : setIsLogin(false);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/registro" component={LoginRegister}></Route>
          <Route path="/welcome" component={Welcome}></Route>
          <PrivateRoute isLogin={isLogin} component={Home} path="/" exact></PrivateRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
