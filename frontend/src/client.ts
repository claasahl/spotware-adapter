import ApolloClient from "apollo-boost";

export const client = new ApolloClient({
  clientState: {
    defaults: { isAuthenticated: false },
    resolvers: {}
  },
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});
