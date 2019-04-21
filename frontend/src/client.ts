import { InMemoryCache } from "apollo-cache-inmemory";
import { persistCache } from "apollo-cache-persist";
import { ApolloClient } from "apollo-client";
import { ApolloLink } from "apollo-link";
import { split } from "apollo-link";
import { HttpLink } from "apollo-link-http";
import { withClientState } from "apollo-link-state";
import { WebSocketLink } from "apollo-link-ws";
import { getMainDefinition } from "apollo-utilities";

const cache = new InMemoryCache();
persistCache({
  cache,
  storage: localStorage
});

const clientState = withClientState({
  cache,
  defaults: { isAuthenticated: false },
  resolvers: {}
});

const wsLink = new WebSocketLink({
  options: {
    reconnect: true
  },
  uri: `ws://localhost:4000/`
});

const httpLink = new HttpLink({
  uri: "http://localhost:4000"
});

// using the ability to split links, you can send data to each link
// depending on what kind of operation is being sent
const link = split(
  // split based on operation type
  ({ query }) => {
    const { kind, operation }: any = getMainDefinition(query);
    return kind === "OperationDefinition" && operation === "subscription";
  },
  wsLink,
  httpLink
);

export const client = new ApolloClient({
  cache,
  link: ApolloLink.from([clientState, link])
});
