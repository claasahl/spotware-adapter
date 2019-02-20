import { GraphQLServer } from "graphql-yoga";
import { IResolvers } from "./generated/graphql-resolvers";

const resolvers: IResolvers<never> = {
  Query: {
    hello: (_parent, { name }) => `Hello ${name || "World"}`
  }
};

const server = new GraphQLServer({
  typeDefs: "./src/schema.graphql",
  resolvers: resolvers as any
});
server.start(() => console.log("Server is running on http://localhost:4000"));
