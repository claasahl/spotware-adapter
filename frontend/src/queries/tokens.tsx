import { ApolloError } from "apollo-client";
import gql from "graphql-tag";
import * as React from "react";
import { Mutation } from "react-apollo";

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

export const tokens = (props: IProps) => (
  <Mutation<ITokens>
    mutation={TOKENS}
    variables={{ $code: props.code }}
    onCompleted={props.onCompleted}
    onError={props.onError}
  >
    {() => {
      // goal: trigger mutation on "render/mount"
      return null;
    }}
  </Mutation>
);
export default tokens;
