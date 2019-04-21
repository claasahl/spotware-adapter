export type Maybe<T> = T | null;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Long: Long;
};

export enum Direction {
  ToServer = "TO_SERVER",
  ToClient = "TO_CLIENT",
  None = "NONE"
}

export type Mutation = {
  tokens: Scalars["String"];
  heartbeat?: Maybe<Scalars["Boolean"]>;
  applicationAuth?: Maybe<Scalars["Boolean"]>;
  accountAuth?: Maybe<Scalars["Boolean"]>;
  version?: Maybe<Scalars["Boolean"]>;
  getAccountListByAccessToken?: Maybe<Scalars["Boolean"]>;
  getCtidProfileByToken?: Maybe<Scalars["Boolean"]>;
};

export type MutationTokensArgs = {
  code: Scalars["String"];
};

export type MutationHeartbeatArgs = {
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type MutationApplicationAuthArgs = {
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type MutationAccountAuthArgs = {
  ctidTraderAccountId: Scalars["Long"];
  accessToken: Scalars["String"];
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type MutationVersionArgs = {
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type MutationGetAccountListByAccessTokenArgs = {
  accessToken: Scalars["String"];
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type MutationGetCtidProfileByTokenArgs = {
  accessToken: Scalars["String"];
  clientMsgId?: Maybe<Scalars["String"]>;
};

export type Query = {
  hello: Scalars["String"];
};

export type QueryHelloArgs = {
  name?: Maybe<Scalars["String"]>;
};

export type Result = {
  id: Scalars["String"];
  direction: Direction;
};

export type Subscription = {
  somethingChanged?: Maybe<Result>;
};
import { IContext } from "../resolvers/Context";

import {
  GraphQLResolveInfo,
  GraphQLScalarType,
  GraphQLScalarTypeConfig
} from "graphql";

export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type StitchingResolver<TResult, TParent, TContext, TArgs> = {
  fragment: string;
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};

export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> =
  | ResolverFn<TResult, TParent, TContext, TArgs>
  | StitchingResolver<TResult, TParent, TContext, TArgs>;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterator<TResult> | Promise<AsyncIterator<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, TParent, TContext, TArgs>;
}

export type SubscriptionResolver<
  TResult,
  TParent = {},
  TContext = {},
  TArgs = {}
> =
  | ((
      ...args: any[]
    ) => SubscriptionResolverObject<TResult, TParent, TContext, TArgs>)
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<
  TResult = {},
  TParent = {},
  TContext = {},
  TArgs = {}
> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = {
  Query: {};
  String: Scalars["String"];
  Mutation: {};
  Boolean: Scalars["Boolean"];
  Long: Scalars["Long"];
  Subscription: {};
  Result: Result;
  Direction: Direction;
};

export interface LongScalarConfig
  extends GraphQLScalarTypeConfig<ResolversTypes["Long"], any> {
  name: "Long";
}

export type MutationResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Mutation"]
> = {
  tokens?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    MutationTokensArgs
  >;
  heartbeat?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationHeartbeatArgs
  >;
  applicationAuth?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationApplicationAuthArgs
  >;
  accountAuth?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationAccountAuthArgs
  >;
  version?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationVersionArgs
  >;
  getAccountListByAccessToken?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationGetAccountListByAccessTokenArgs
  >;
  getCtidProfileByToken?: Resolver<
    Maybe<ResolversTypes["Boolean"]>,
    ParentType,
    ContextType,
    MutationGetCtidProfileByTokenArgs
  >;
};

export type QueryResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Query"]
> = {
  hello?: Resolver<
    ResolversTypes["String"],
    ParentType,
    ContextType,
    QueryHelloArgs
  >;
};

export type ResultResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Result"]
> = {
  id?: Resolver<ResolversTypes["String"], ParentType, ContextType>;
  direction?: Resolver<ResolversTypes["Direction"], ParentType, ContextType>;
};

export type SubscriptionResolvers<
  ContextType = IContext,
  ParentType = ResolversTypes["Subscription"]
> = {
  somethingChanged?: SubscriptionResolver<
    Maybe<ResolversTypes["Result"]>,
    ParentType,
    ContextType
  >;
};

export type Resolvers<ContextType = IContext> = {
  Long?: GraphQLScalarType;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Result?: ResultResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
};

/**
 * @deprecated
 * Use "Resolvers" root object instead. If you wish to get "IResolvers", add "typesPrefix: I" to your config.
 */
export type IResolvers<ContextType = IContext> = Resolvers<ContextType>;
