import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ IsLogin, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        IsLogin ? <Component {...props} /> : <Redirect to="/registro" />
      }
    />
  );
};

export default PrivateRoute;
