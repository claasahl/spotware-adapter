import gql from "graphql-tag";

// TODO
export const typeDefs = gql`
  type Query {
    hello(name: String): String!
  }
`;

export default typeDefs;
