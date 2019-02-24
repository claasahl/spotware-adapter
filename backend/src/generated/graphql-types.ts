export type Maybe<T> = T | null;

// ====================================================
// Types
// ====================================================

export interface Query {
  hello: string;
}

export interface Mutation {
  tokens: string;

  proto: string;
}

export interface Subscription {
  somethingChanged?: Maybe<Result>;
}

export interface Result {
  id: string;
}

// ====================================================
// Arguments
// ====================================================

export interface HelloQueryArgs {
  name?: Maybe<string>;
}
export interface TokensMutationArgs {
  code: string;
}
export interface ProtoMutationArgs {
  code: string;

  host: string;

  port: number;
}

import { GraphQLResolveInfo } from "graphql";

import { IContext } from "../resolvers/Context";

export type Resolver<Result, Parent = {}, TContext = {}, Args = {}> = (
  parent: Parent,
  args: Args,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<Result> | Result;

export interface ISubscriptionResolverObject<Result, Parent, TContext, Args> {
  subscribe<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): AsyncIterator<R | Result> | Promise<AsyncIterator<R | Result>>;
  resolve?<R = Result, P = Parent>(
    parent: P,
    args: Args,
    context: TContext,
    info: GraphQLResolveInfo
  ): R | Result | Promise<R | Result>;
}

export type SubscriptionResolver<
  Result,
  Parent = {},
  TContext = {},
  Args = {}
> =
  | ((
      ...args: any[]
    ) => ISubscriptionResolverObject<Result, Parent, TContext, Args>)
  | ISubscriptionResolverObject<Result, Parent, TContext, Args>;

export type TypeResolveFn<Types, Parent = {}, TContext = {}> = (
  parent: Parent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<Types>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult, TArgs = {}, TContext = {}> = (
  next: NextResolverFn<TResult>,
  source: any,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export namespace QueryResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    hello?: HelloResolver<string, TypeParent, TContext>;
  }

  export type HelloResolver<
    R = string,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, HelloArgs>;
  export interface HelloArgs {
    name?: Maybe<string>;
  }
}

export namespace MutationResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    tokens?: TokensResolver<string, TypeParent, TContext>;

    proto?: ProtoResolver<string, TypeParent, TContext>;
  }

  export type TokensResolver<
    R = string,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, TokensArgs>;
  export interface TokensArgs {
    code: string;
  }

  export type ProtoResolver<
    R = string,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ProtoArgs>;
  export interface ProtoArgs {
    code: string;

    host: string;

    port: number;
  }
}

export namespace SubscriptionResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = {}> {
    somethingChanged?: SomethingChangedResolver<
      Maybe<Result>,
      TypeParent,
      TContext
    >;
  }

  export type SomethingChangedResolver<
    R = Maybe<Result>,
    Parent = {},
    TContext = IContext
  > = SubscriptionResolver<R, Parent, TContext>;
}

export namespace ResultResolvers {
  export interface Resolvers<TContext = IContext, TypeParent = Result> {
    id?: IdResolver<string, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = Result,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
}

/** Directs the executor to skip this field or fragment when the `if` argument is true. */
export type SkipDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  SkipDirectiveArgs,
  IContext
>;
export interface SkipDirectiveArgs {
  /** Skipped when true. */
  if: boolean;
}

/** Directs the executor to include this field or fragment only when the `if` argument is true. */
export type IncludeDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  IncludeDirectiveArgs,
  IContext
>;
export interface IncludeDirectiveArgs {
  /** Included when true. */
  if: boolean;
}

/** Marks an element of a GraphQL schema as no longer supported. */
export type DeprecatedDirectiveResolver<Result> = DirectiveResolverFn<
  Result,
  DeprecatedDirectiveArgs,
  IContext
>;
export interface DeprecatedDirectiveArgs {
  /** Explains why this element was deprecated, usually also including a suggestion for how to access supported similar data. Formatted using the Markdown syntax (as specified by [CommonMark](https://commonmark.org/). */
  reason?: string;
}

export interface IResolvers<TContext = IContext> {
  Query?: QueryResolvers.Resolvers<TContext>;
  Mutation?: MutationResolvers.Resolvers<TContext>;
  Subscription?: SubscriptionResolvers.Resolvers<TContext>;
  Result?: ResultResolvers.Resolvers<TContext>;
}

export interface IDirectiveResolvers<Result> {
  skip?: SkipDirectiveResolver<Result>;
  include?: IncludeDirectiveResolver<Result>;
  deprecated?: DeprecatedDirectiveResolver<Result>;
}
