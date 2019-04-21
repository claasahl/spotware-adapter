import * as React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";

import { fakeAuth } from "./fakeAuth";
import { spotware } from "./spotware";

interface IState {
  redirectToReferrer: boolean;
}

export class Login extends React.Component<RouteComponentProps, IState> {
  public state = {
    redirectToReferrer: false
  };

  public render() {
    const { from } = this.props.location.state || { from: { pathname: "/" } };
    const { redirectToReferrer } = this.state;

    if (redirectToReferrer) {
      return <Redirect to={from} />;
    }

    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={this.login}>Log in</button>
        <a href={spotware.auth()}>test</a>
      </div>
    );
  }

  private login = () => {
    fakeAuth.authenticate(() => {
      this.setState({ redirectToReferrer: true });
    });
  };
}

export default Login;
