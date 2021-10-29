import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../hooks/useAuth";
import Spinner from "../Spinner/Spinner";

const PrivateRoute = ({ children, ...rest }) => {
  const { user, isLoading } = useAuth();
  console.log(isLoading, user);
  if (isLoading) {
    return (
      <Route {...rest}>
        <Spinner></Spinner>
      </Route>
    );
  }
  return (
    <Route {...rest}>
      {({ location }) =>
        user ? children : <Redirect to={{ pathname: "/login", state: { from: location } }}></Redirect>
      }
    </Route>
  );
};

export default PrivateRoute;
