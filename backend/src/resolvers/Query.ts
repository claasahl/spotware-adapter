import { QueryResolvers } from "../generated/graphql-types";

export const query: Required<QueryResolvers.Resolvers> = {
  hello: (_parent, { name }) => {
    return `Hello ${name || "World"}`;
  }
};
export default query;
