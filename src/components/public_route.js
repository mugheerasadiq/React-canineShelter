import React from "react";
import { Route, Redirect } from "react-router-dom";
import PropTypes from "prop-types";

const PublicRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => {
      if (localStorage.getItem("user")) {
        return (
          // <Redirect
          //   to={{
          //     pathname: "/home",
          //     state: { from: props.location },
          //   }}
          <Component {...props} />
        );
      }
      return <Component {...props} />;
    }}
  />
);

// PropTypes
PublicRoute.propTypes = {
  location: PropTypes.object,
  Component: PropTypes.any,
  rest: PropTypes.any,
};

export default PublicRoute;
