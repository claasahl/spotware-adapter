import { QueryResolvers } from "../generated/graphql-types";

export const query: Required<QueryResolvers> = {
  hello: (_parent, { name }) => {
    return `Hello ${name || "World"}`;
  }
};
export default query;
