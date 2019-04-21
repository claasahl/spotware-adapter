import { ApolloError } from "apollo-client";
import { parse } from "query-string";
import * as React from "react";

import { ITokens, Tokens } from "./queries/tokens";

interface IState {
  accessToken?: string;
  refreshToken?: string;
  error?: ApolloError;
}
export class Callback extends React.Component<never, IState> {
  public state: IState = {};

  public render() {
    const { code } = parse(location.search);
    const { error, accessToken, refreshToken } = this.state;
    return (
      <div>
        <Tokens
          code={code as string}
          onCompleted={this.onCompleted}
          onError={this.onError}
        />
        <p>here we go: {code}</p>
        {error && <p>error: {error.message}</p>}
        {accessToken && <p>access token: {accessToken}</p>}
        {refreshToken && <p>refresh token: {refreshToken}</p>}
      </div>
    );
  }

  private onCompleted = (data: ITokens) => {
    // tslint:disable-next-line:no-console
    console.log("onCompleted", data);
    this.setState({ accessToken: data.tokens, refreshToken: "refresh" });
  };

  private onError = (error: ApolloError) => {
    // tslint:disable-next-line:no-console
    console.log("onError", error);
    this.setState({ error });
  };
}
export default Callback;
