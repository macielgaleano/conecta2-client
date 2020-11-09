import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = ({ component: Component, restricted, ...rest }) => {
  let loginData = useSelector((state) => state);
  const [isLogin, setIsLogin] = useState("false");
  loginData.loginReducer.token !== undefined ? setIsLogin(true) : setIsLogin(false);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLogin && restricted ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRoute;
