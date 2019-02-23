import { ApolloError } from "apollo-client";
import gql from "graphql-tag";
import * as React from "react";

import { client } from "../client";

export const TOKENS = gql`
  mutation tokens($code: String!) {
    tokens(code: $code)
  }
`;

export interface ITokens {
  tokens: string;
}

export interface IProps {
  code: string;
  onCompleted?: (data: ITokens) => void;
  onError?: (error: ApolloError) => void;
}

export class Tokens extends React.Component<IProps> {
  public componentDidMount() {
    const { code, onError, onCompleted } = this.props;
    client
      .mutate<ITokens>({ mutation: TOKENS, variables: { code } })
      .then(value => {
        if (onCompleted && value.data) {
          onCompleted(value.data);
        }
      })
      .catch(onError);
  }
  public render() {
    return null;
  }
}
export default Tokens;
