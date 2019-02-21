import { IResolvers } from "../generated/graphql-types";

import Query from "./Query";
import Subscription from "./Subscription";
import Result from "./Result";

export const schema: Required<IResolvers> = {
  Query,
  Subscription,
  Result
};
export default schema;
