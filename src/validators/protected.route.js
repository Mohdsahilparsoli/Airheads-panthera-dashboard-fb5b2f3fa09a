import React from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "./auth";
import {  useSelector } from "react-redux";

export const ProtectedRoute = ({ component: Component, role, ...rest }) => {
  const state = useSelector((state) => ({
    loggedIn: state.loggedInUser.userLoggedIn,
  }));
  return (
    <Route
      {...rest}
      render={props => {
        if (state.loggedIn) {
          if (auth.hasPermissions(props, role)) {
            return <Component {...props} />;
          } else {
            return (
              <Redirect
                to={{
                  pathname: "/nopermissions",
                  state: {
                    from: props.location
                  }
                }}
              />
            );
          }
        } else {
          return (
            <Redirect
              to={{
                pathname: "/login",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
