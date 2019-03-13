export type Maybe<T> = T | null;

export enum Direction {
  ToServer = "TO_SERVER",
  ToClient = "TO_CLIENT",
  None = "NONE"
}

// ====================================================
// Types
// ====================================================

export interface Query {
  hello: string;
}

export interface Mutation {
  tokens: string;

  heartbeat?: Maybe<boolean>;

  applicationAuth?: Maybe<boolean>;
  /** accountAuth(ctidTraderAccountId: Int64!, clientMsgId: String): Boolean */
  accountAuth?: Maybe<boolean>;

  version?: Maybe<boolean>;

  getAccountListByAccessToken?: Maybe<boolean>;

  getCtidProfileByToken?: Maybe<boolean>;
}

export interface Subscription {
  somethingChanged?: Maybe<Result>;
}

export interface Result {
  id: string;

  direction: Direction;
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
export interface HeartbeatMutationArgs {
  clientMsgId?: Maybe<string>;
}
export interface ApplicationAuthMutationArgs {
  clientMsgId?: Maybe<string>;
}
export interface AccountAuthMutationArgs {
  ctidTraderAccountId: number;

  accessToken: string;

  clientMsgId?: Maybe<string>;
}
export interface VersionMutationArgs {
  clientMsgId?: Maybe<string>;
}
export interface GetAccountListByAccessTokenMutationArgs {
  accessToken: string;

  clientMsgId?: Maybe<string>;
}
export interface GetCtidProfileByTokenMutationArgs {
  accessToken: string;

  clientMsgId?: Maybe<string>;
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

    heartbeat?: HeartbeatResolver<Maybe<boolean>, TypeParent, TContext>;

    applicationAuth?: ApplicationAuthResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;
    /** accountAuth(ctidTraderAccountId: Int64!, clientMsgId: String): Boolean */
    accountAuth?: AccountAuthResolver<Maybe<boolean>, TypeParent, TContext>;

    version?: VersionResolver<Maybe<boolean>, TypeParent, TContext>;

    getAccountListByAccessToken?: GetAccountListByAccessTokenResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;

    getCtidProfileByToken?: GetCtidProfileByTokenResolver<
      Maybe<boolean>,
      TypeParent,
      TContext
    >;
  }

  export type TokensResolver<
    R = string,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, TokensArgs>;
  export interface TokensArgs {
    code: string;
  }

  export type HeartbeatResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, HeartbeatArgs>;
  export interface HeartbeatArgs {
    clientMsgId?: Maybe<string>;
  }

  export type ApplicationAuthResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, ApplicationAuthArgs>;
  export interface ApplicationAuthArgs {
    clientMsgId?: Maybe<string>;
  }

  export type AccountAuthResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, AccountAuthArgs>;
  export interface AccountAuthArgs {
    ctidTraderAccountId: number;

    accessToken: string;

    clientMsgId?: Maybe<string>;
  }

  export type VersionResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, VersionArgs>;
  export interface VersionArgs {
    clientMsgId?: Maybe<string>;
  }

  export type GetAccountListByAccessTokenResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, GetAccountListByAccessTokenArgs>;
  export interface GetAccountListByAccessTokenArgs {
    accessToken: string;

    clientMsgId?: Maybe<string>;
  }

  export type GetCtidProfileByTokenResolver<
    R = Maybe<boolean>,
    Parent = {},
    TContext = IContext
  > = Resolver<R, Parent, TContext, GetCtidProfileByTokenArgs>;
  export interface GetCtidProfileByTokenArgs {
    accessToken: string;

    clientMsgId?: Maybe<string>;
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

    direction?: DirectionResolver<Direction, TypeParent, TContext>;
  }

  export type IdResolver<
    R = string,
    Parent = Result,
    TContext = IContext
  > = Resolver<R, Parent, TContext>;
  export type DirectionResolver<
    R = Direction,
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
