import { QueryResolvers } from "../generated/graphql-types";

import { somethingChanged } from "./Subscription";

export const query: Required<QueryResolvers.Resolvers> = {
  hello: (_parent, { name }, context) => {
    somethingChanged({ id: name });
    somethingChanged({ id: context.test });
    return `Hello ${name || "World"}`;
  }
};
export default query;
