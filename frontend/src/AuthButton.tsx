import * as React from "react";
import { withRouter } from "react-router-dom";

import { fakeAuth } from "./fakeAuth";

export const AuthButton = withRouter(({ history }) => {
  const signout = () => {
    fakeAuth.signout(() => history.push("/"));
  };
  return fakeAuth.isAuthenticated ? (
    <p>
      Welcome! <button onClick={signout}>Sign out</button>
    </p>
  ) : (
    <p>You are not logged in.</p>
  );
});
export default AuthButton;
