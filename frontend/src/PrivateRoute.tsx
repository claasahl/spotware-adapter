import * as React from "react";
import { Redirect, Route } from "react-router-dom";

import { fakeAuth } from "./fakeAuth";

export const PrivateRoute = ({ component: Component, ...rest }: any) => {
  const bla = (props: any) =>
    fakeAuth.isAuthenticated() ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: "/login",
          state: { from: props.location }
        }}
      />
    );
  return <Route {...rest} render={bla} />;
};

export default PrivateRoute;
