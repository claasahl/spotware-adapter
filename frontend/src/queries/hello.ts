import gql from "graphql-tag";

export const HELLO = gql`
  query hello($name: String!) {
    hello(name: $name)
  }
`;

export interface IHello {
  hello: string;
}
