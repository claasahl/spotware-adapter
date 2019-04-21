import gql from "graphql-tag";
import * as React from "react";
import { OnSubscriptionDataOptions, Subscription } from "react-apollo";

export const NAMES = gql`
  subscription names {
    somethingChanged {
      id
    }
  }
`;

export interface INames {
  somethingChanged: {
    id: string;
  };
}

export interface IProps {
  onEvent: (event: OnSubscriptionDataOptions<INames>) => void;
}

export const names = (props: IProps) => (
  <Subscription<INames> subscription={NAMES} onSubscriptionData={props.onEvent}>
    {}
  </Subscription>
);
export default names;
