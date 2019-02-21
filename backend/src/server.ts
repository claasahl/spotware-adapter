import { GraphQLServer } from "graphql-yoga";

import schema from "./resolvers/Schema";
import context from "./resolvers/Context";

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: schema as any,
  context
});
server.start(() => console.log("Server is running on http://localhost:4000"));
