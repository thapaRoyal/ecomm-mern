import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const UserRoute = ({ children, ...rest }) => {
  // get user from state
  const { user } = useSelector((state) => ({ ...state }));

  //   protect route
  return user && user.token ? (
    <Route {...rest} render={() => children} />
  ) : (
    <h1 className="text-danger">Loading...</h1>
  );
};

export default UserRoute;
