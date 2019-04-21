import { IResolvers } from "../generated/graphql-types";

import Mutation from "./Mutation";
import Query from "./Query";
import Subscription from "./Subscription";
import Result from "./Result";
import Long from "./Long";

export const schema: Required<IResolvers> = {
  Mutation,
  Query,
  Subscription,
  Result,
  Long
};
export default schema;
