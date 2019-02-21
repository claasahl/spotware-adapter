import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";

const cache = new InMemoryCache();

const clientState = withClientState({
  cache,
  defaults: { isAuthenticated: false },
  resolvers: {}
});

const httpLink = new HttpLink({
  uri: "https://48p1r2roz4.sse.codesandbox.io"
});

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([clientState, httpLink])
});
