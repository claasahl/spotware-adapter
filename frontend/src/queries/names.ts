import gql from "graphql-tag";

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
