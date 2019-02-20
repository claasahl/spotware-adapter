import { GraphQLServer } from "graphql-yoga";

import {} from "./schema";

const resolvers = {
  Query: {
    hello: (_parent: any, { name }: any) => {
      return `Hello ${name || "World"}`;
    }
  }
};

const server = new GraphQLServer({ typeDefs: "schema.graphql", resolvers });
server.start(() => console.log("Server is running on http://localhost:4000"));
