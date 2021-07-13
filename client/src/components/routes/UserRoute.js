import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingToRedirects from "./LoadingToRedirects";

const UserRoute = ({ children, ...rest }) => {
  // get user from state
  const { user } = useSelector((state) => ({ ...state }));

  //   protect route
  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <LoadingToRedirects />
  );
};

export default UserRoute;
