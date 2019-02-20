import { Maybe } from "./graphql-common";

// ====================================================
// Types
// ====================================================

export interface Query {
  hello: string;
}

// ====================================================
// Arguments
// ====================================================

export interface HelloQueryArgs {
  name?: Maybe<string>;
}
