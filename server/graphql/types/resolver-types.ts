// Code generated by github.com/prisma/graphqlgen, DO NOT EDIT.

import { GraphQLResolveInfo } from "graphql";
import { Company } from "./models";
import { Context } from "./context";

export namespace QueryResolvers {
  export const defaultResolvers = {};

  export type GetCompaniesResolver = (
    parent: undefined,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => Company[] | null | Promise<Company[] | null>;

  export interface Type {
    getCompanies: (
      parent: undefined,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => Company[] | null | Promise<Company[] | null>;
  }
}

export namespace CompanyResolvers {
  export const defaultResolvers = {
    name: (parent: Company) => parent.name,
    id: (parent: Company) => parent.id
  };

  export type NameResolver = (
    parent: Company,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export type IdResolver = (
    parent: Company,
    args: {},
    ctx: Context,
    info: GraphQLResolveInfo
  ) => string | null | Promise<string | null>;

  export interface Type {
    name: (
      parent: Company,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;

    id: (
      parent: Company,
      args: {},
      ctx: Context,
      info: GraphQLResolveInfo
    ) => string | null | Promise<string | null>;
  }
}

export interface Resolvers {
  Query: QueryResolvers.Type;
  Company: CompanyResolvers.Type;
}
