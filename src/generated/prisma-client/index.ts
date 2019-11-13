// Code generated by Prisma (prisma@1.34.10). DO NOT EDIT.
// Please don't change this file manually but run `prisma generate` to update it.
// For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

import { DocumentNode } from "graphql";
import {
  makePrismaClientClass,
  BaseClientOptions,
  Model
} from "prisma-client-lib";
import { typeDefs } from "./prisma-schema";

export type AtLeastOne<T, U = { [K in keyof T]: Pick<T, K> }> = Partial<T> &
  U[keyof U];

export type Maybe<T> = T | undefined | null;

export interface Exists {
  update: (where?: UpdateWhereInput) => Promise<boolean>;
  user: (where?: UserWhereInput) => Promise<boolean>;
}

export interface Node {}

export type FragmentableArray<T> = Promise<Array<T>> & Fragmentable;

export interface Fragmentable {
  $fragment<T>(fragment: string | DocumentNode): Promise<T>;
}

export interface Prisma {
  $exists: Exists;
  $graphql: <T = any>(
    query: string,
    variables?: { [key: string]: any }
  ) => Promise<T>;

  /**
   * Queries
   */

  update: (where: UpdateWhereUniqueInput) => UpdateNullablePromise;
  updates: (args?: {
    where?: UpdateWhereInput;
    orderBy?: UpdateOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<Update>;
  updatesConnection: (args?: {
    where?: UpdateWhereInput;
    orderBy?: UpdateOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UpdateConnectionPromise;
  user: (where: UserWhereUniqueInput) => UserNullablePromise;
  users: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => FragmentableArray<User>;
  usersConnection: (args?: {
    where?: UserWhereInput;
    orderBy?: UserOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => UserConnectionPromise;
  node: (args: { id: ID_Output }) => Node;

  /**
   * Mutations
   */

  createUpdate: (data: UpdateCreateInput) => UpdatePromise;
  updateUpdate: (args: {
    data: UpdateUpdateInput;
    where: UpdateWhereUniqueInput;
  }) => UpdatePromise;
  updateManyUpdates: (args: {
    data: UpdateUpdateManyMutationInput;
    where?: UpdateWhereInput;
  }) => BatchPayloadPromise;
  upsertUpdate: (args: {
    where: UpdateWhereUniqueInput;
    create: UpdateCreateInput;
    update: UpdateUpdateInput;
  }) => UpdatePromise;
  deleteUpdate: (where: UpdateWhereUniqueInput) => UpdatePromise;
  deleteManyUpdates: (where?: UpdateWhereInput) => BatchPayloadPromise;
  createUser: (data: UserCreateInput) => UserPromise;
  updateUser: (args: {
    data: UserUpdateInput;
    where: UserWhereUniqueInput;
  }) => UserPromise;
  updateManyUsers: (args: {
    data: UserUpdateManyMutationInput;
    where?: UserWhereInput;
  }) => BatchPayloadPromise;
  upsertUser: (args: {
    where: UserWhereUniqueInput;
    create: UserCreateInput;
    update: UserUpdateInput;
  }) => UserPromise;
  deleteUser: (where: UserWhereUniqueInput) => UserPromise;
  deleteManyUsers: (where?: UserWhereInput) => BatchPayloadPromise;

  /**
   * Subscriptions
   */

  $subscribe: Subscription;
}

export interface Subscription {
  update: (
    where?: UpdateSubscriptionWhereInput
  ) => UpdateSubscriptionPayloadSubscription;
  user: (
    where?: UserSubscriptionWhereInput
  ) => UserSubscriptionPayloadSubscription;
}

export interface ClientConstructor<T> {
  new (options?: BaseClientOptions): T;
}

/**
 * Types
 */

export type Role = "SUPERADMIN" | "ADMIN" | "BASIC" | "NONE";

export type Status = "ACTIVE" | "IDLE";

export type UpdateOrderByInput =
  | "id_ASC"
  | "id_DESC"
  | "date_ASC"
  | "date_DESC";

export type UserOrderByInput =
  | "username_ASC"
  | "username_DESC"
  | "createdAt_ASC"
  | "createdAt_DESC"
  | "firstname_ASC"
  | "firstname_DESC"
  | "surname_ASC"
  | "surname_DESC"
  | "password_ASC"
  | "password_DESC"
  | "role_ASC"
  | "role_DESC"
  | "status_ASC"
  | "status_DESC";

export type MutationType = "CREATED" | "UPDATED" | "DELETED";

export type UpdateWhereUniqueInput = AtLeastOne<{
  id: Maybe<ID_Input>;
}>;

export interface UpdateWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  user?: Maybe<UserWhereInput>;
  date?: Maybe<DateTimeInput>;
  date_not?: Maybe<DateTimeInput>;
  date_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_lt?: Maybe<DateTimeInput>;
  date_lte?: Maybe<DateTimeInput>;
  date_gt?: Maybe<DateTimeInput>;
  date_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UpdateWhereInput[] | UpdateWhereInput>;
  OR?: Maybe<UpdateWhereInput[] | UpdateWhereInput>;
  NOT?: Maybe<UpdateWhereInput[] | UpdateWhereInput>;
}

export interface UserWhereInput {
  username?: Maybe<ID_Input>;
  username_not?: Maybe<ID_Input>;
  username_in?: Maybe<ID_Input[] | ID_Input>;
  username_not_in?: Maybe<ID_Input[] | ID_Input>;
  username_lt?: Maybe<ID_Input>;
  username_lte?: Maybe<ID_Input>;
  username_gt?: Maybe<ID_Input>;
  username_gte?: Maybe<ID_Input>;
  username_contains?: Maybe<ID_Input>;
  username_not_contains?: Maybe<ID_Input>;
  username_starts_with?: Maybe<ID_Input>;
  username_not_starts_with?: Maybe<ID_Input>;
  username_ends_with?: Maybe<ID_Input>;
  username_not_ends_with?: Maybe<ID_Input>;
  createdAt?: Maybe<DateTimeInput>;
  createdAt_not?: Maybe<DateTimeInput>;
  createdAt_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  createdAt_lt?: Maybe<DateTimeInput>;
  createdAt_lte?: Maybe<DateTimeInput>;
  createdAt_gt?: Maybe<DateTimeInput>;
  createdAt_gte?: Maybe<DateTimeInput>;
  firstname?: Maybe<String>;
  firstname_not?: Maybe<String>;
  firstname_in?: Maybe<String[] | String>;
  firstname_not_in?: Maybe<String[] | String>;
  firstname_lt?: Maybe<String>;
  firstname_lte?: Maybe<String>;
  firstname_gt?: Maybe<String>;
  firstname_gte?: Maybe<String>;
  firstname_contains?: Maybe<String>;
  firstname_not_contains?: Maybe<String>;
  firstname_starts_with?: Maybe<String>;
  firstname_not_starts_with?: Maybe<String>;
  firstname_ends_with?: Maybe<String>;
  firstname_not_ends_with?: Maybe<String>;
  surname?: Maybe<String>;
  surname_not?: Maybe<String>;
  surname_in?: Maybe<String[] | String>;
  surname_not_in?: Maybe<String[] | String>;
  surname_lt?: Maybe<String>;
  surname_lte?: Maybe<String>;
  surname_gt?: Maybe<String>;
  surname_gte?: Maybe<String>;
  surname_contains?: Maybe<String>;
  surname_not_contains?: Maybe<String>;
  surname_starts_with?: Maybe<String>;
  surname_not_starts_with?: Maybe<String>;
  surname_ends_with?: Maybe<String>;
  surname_not_ends_with?: Maybe<String>;
  password?: Maybe<String>;
  password_not?: Maybe<String>;
  password_in?: Maybe<String[] | String>;
  password_not_in?: Maybe<String[] | String>;
  password_lt?: Maybe<String>;
  password_lte?: Maybe<String>;
  password_gt?: Maybe<String>;
  password_gte?: Maybe<String>;
  password_contains?: Maybe<String>;
  password_not_contains?: Maybe<String>;
  password_starts_with?: Maybe<String>;
  password_not_starts_with?: Maybe<String>;
  password_ends_with?: Maybe<String>;
  password_not_ends_with?: Maybe<String>;
  role?: Maybe<Role>;
  role_not?: Maybe<Role>;
  role_in?: Maybe<Role[] | Role>;
  role_not_in?: Maybe<Role[] | Role>;
  status?: Maybe<Status>;
  status_not?: Maybe<Status>;
  status_in?: Maybe<Status[] | Status>;
  status_not_in?: Maybe<Status[] | Status>;
  updates_every?: Maybe<UpdateWhereInput>;
  updates_some?: Maybe<UpdateWhereInput>;
  updates_none?: Maybe<UpdateWhereInput>;
  AND?: Maybe<UserWhereInput[] | UserWhereInput>;
  OR?: Maybe<UserWhereInput[] | UserWhereInput>;
  NOT?: Maybe<UserWhereInput[] | UserWhereInput>;
}

export type UserWhereUniqueInput = AtLeastOne<{
  username: Maybe<ID_Input>;
}>;

export interface UpdateCreateInput {
  id?: Maybe<ID_Input>;
  user: UserCreateOneWithoutUpdatesInput;
  date: DateTimeInput;
}

export interface UserCreateOneWithoutUpdatesInput {
  create?: Maybe<UserCreateWithoutUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserCreateWithoutUpdatesInput {
  username?: Maybe<ID_Input>;
  firstname: String;
  surname: String;
  password: String;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
}

export interface UpdateUpdateInput {
  user?: Maybe<UserUpdateOneRequiredWithoutUpdatesInput>;
  date?: Maybe<DateTimeInput>;
}

export interface UserUpdateOneRequiredWithoutUpdatesInput {
  create?: Maybe<UserCreateWithoutUpdatesInput>;
  update?: Maybe<UserUpdateWithoutUpdatesDataInput>;
  upsert?: Maybe<UserUpsertWithoutUpdatesInput>;
  connect?: Maybe<UserWhereUniqueInput>;
}

export interface UserUpdateWithoutUpdatesDataInput {
  firstname?: Maybe<String>;
  surname?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
}

export interface UserUpsertWithoutUpdatesInput {
  update: UserUpdateWithoutUpdatesDataInput;
  create: UserCreateWithoutUpdatesInput;
}

export interface UpdateUpdateManyMutationInput {
  date?: Maybe<DateTimeInput>;
}

export interface UserCreateInput {
  username?: Maybe<ID_Input>;
  firstname: String;
  surname: String;
  password: String;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
  updates?: Maybe<UpdateCreateManyWithoutUserInput>;
}

export interface UpdateCreateManyWithoutUserInput {
  create?: Maybe<UpdateCreateWithoutUserInput[] | UpdateCreateWithoutUserInput>;
  connect?: Maybe<UpdateWhereUniqueInput[] | UpdateWhereUniqueInput>;
}

export interface UpdateCreateWithoutUserInput {
  id?: Maybe<ID_Input>;
  date: DateTimeInput;
}

export interface UserUpdateInput {
  firstname?: Maybe<String>;
  surname?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
  updates?: Maybe<UpdateUpdateManyWithoutUserInput>;
}

export interface UpdateUpdateManyWithoutUserInput {
  create?: Maybe<UpdateCreateWithoutUserInput[] | UpdateCreateWithoutUserInput>;
  delete?: Maybe<UpdateWhereUniqueInput[] | UpdateWhereUniqueInput>;
  connect?: Maybe<UpdateWhereUniqueInput[] | UpdateWhereUniqueInput>;
  set?: Maybe<UpdateWhereUniqueInput[] | UpdateWhereUniqueInput>;
  disconnect?: Maybe<UpdateWhereUniqueInput[] | UpdateWhereUniqueInput>;
  update?: Maybe<
    | UpdateUpdateWithWhereUniqueWithoutUserInput[]
    | UpdateUpdateWithWhereUniqueWithoutUserInput
  >;
  upsert?: Maybe<
    | UpdateUpsertWithWhereUniqueWithoutUserInput[]
    | UpdateUpsertWithWhereUniqueWithoutUserInput
  >;
  deleteMany?: Maybe<UpdateScalarWhereInput[] | UpdateScalarWhereInput>;
  updateMany?: Maybe<
    | UpdateUpdateManyWithWhereNestedInput[]
    | UpdateUpdateManyWithWhereNestedInput
  >;
}

export interface UpdateUpdateWithWhereUniqueWithoutUserInput {
  where: UpdateWhereUniqueInput;
  data: UpdateUpdateWithoutUserDataInput;
}

export interface UpdateUpdateWithoutUserDataInput {
  date?: Maybe<DateTimeInput>;
}

export interface UpdateUpsertWithWhereUniqueWithoutUserInput {
  where: UpdateWhereUniqueInput;
  update: UpdateUpdateWithoutUserDataInput;
  create: UpdateCreateWithoutUserInput;
}

export interface UpdateScalarWhereInput {
  id?: Maybe<ID_Input>;
  id_not?: Maybe<ID_Input>;
  id_in?: Maybe<ID_Input[] | ID_Input>;
  id_not_in?: Maybe<ID_Input[] | ID_Input>;
  id_lt?: Maybe<ID_Input>;
  id_lte?: Maybe<ID_Input>;
  id_gt?: Maybe<ID_Input>;
  id_gte?: Maybe<ID_Input>;
  id_contains?: Maybe<ID_Input>;
  id_not_contains?: Maybe<ID_Input>;
  id_starts_with?: Maybe<ID_Input>;
  id_not_starts_with?: Maybe<ID_Input>;
  id_ends_with?: Maybe<ID_Input>;
  id_not_ends_with?: Maybe<ID_Input>;
  date?: Maybe<DateTimeInput>;
  date_not?: Maybe<DateTimeInput>;
  date_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_not_in?: Maybe<DateTimeInput[] | DateTimeInput>;
  date_lt?: Maybe<DateTimeInput>;
  date_lte?: Maybe<DateTimeInput>;
  date_gt?: Maybe<DateTimeInput>;
  date_gte?: Maybe<DateTimeInput>;
  AND?: Maybe<UpdateScalarWhereInput[] | UpdateScalarWhereInput>;
  OR?: Maybe<UpdateScalarWhereInput[] | UpdateScalarWhereInput>;
  NOT?: Maybe<UpdateScalarWhereInput[] | UpdateScalarWhereInput>;
}

export interface UpdateUpdateManyWithWhereNestedInput {
  where: UpdateScalarWhereInput;
  data: UpdateUpdateManyDataInput;
}

export interface UpdateUpdateManyDataInput {
  date?: Maybe<DateTimeInput>;
}

export interface UserUpdateManyMutationInput {
  firstname?: Maybe<String>;
  surname?: Maybe<String>;
  password?: Maybe<String>;
  role?: Maybe<Role>;
  status?: Maybe<Status>;
}

export interface UpdateSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UpdateWhereInput>;
  AND?: Maybe<UpdateSubscriptionWhereInput[] | UpdateSubscriptionWhereInput>;
  OR?: Maybe<UpdateSubscriptionWhereInput[] | UpdateSubscriptionWhereInput>;
  NOT?: Maybe<UpdateSubscriptionWhereInput[] | UpdateSubscriptionWhereInput>;
}

export interface UserSubscriptionWhereInput {
  mutation_in?: Maybe<MutationType[] | MutationType>;
  updatedFields_contains?: Maybe<String>;
  updatedFields_contains_every?: Maybe<String[] | String>;
  updatedFields_contains_some?: Maybe<String[] | String>;
  node?: Maybe<UserWhereInput>;
  AND?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  OR?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
  NOT?: Maybe<UserSubscriptionWhereInput[] | UserSubscriptionWhereInput>;
}

export interface NodeNode {
  id: ID_Output;
}

export interface Update {
  id: ID_Output;
  date: DateTimeOutput;
}

export interface UpdatePromise extends Promise<Update>, Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  date: () => Promise<DateTimeOutput>;
}

export interface UpdateSubscription
  extends Promise<AsyncIterator<Update>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  user: <T = UserSubscription>() => T;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UpdateNullablePromise
  extends Promise<Update | null>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  user: <T = UserPromise>() => T;
  date: () => Promise<DateTimeOutput>;
}

export interface User {
  username: ID_Output;
  createdAt: DateTimeOutput;
  firstname: String;
  surname: String;
  password: String;
  role: Role;
  status: Status;
}

export interface UserPromise extends Promise<User>, Fragmentable {
  username: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  firstname: () => Promise<String>;
  surname: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  status: () => Promise<Status>;
  updates: <T = FragmentableArray<Update>>(args?: {
    where?: UpdateWhereInput;
    orderBy?: UpdateOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserSubscription
  extends Promise<AsyncIterator<User>>,
    Fragmentable {
  username: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstname: () => Promise<AsyncIterator<String>>;
  surname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
  status: () => Promise<AsyncIterator<Status>>;
  updates: <T = Promise<AsyncIterator<UpdateSubscription>>>(args?: {
    where?: UpdateWhereInput;
    orderBy?: UpdateOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UserNullablePromise
  extends Promise<User | null>,
    Fragmentable {
  username: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  firstname: () => Promise<String>;
  surname: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  status: () => Promise<Status>;
  updates: <T = FragmentableArray<Update>>(args?: {
    where?: UpdateWhereInput;
    orderBy?: UpdateOrderByInput;
    skip?: Int;
    after?: String;
    before?: String;
    first?: Int;
    last?: Int;
  }) => T;
}

export interface UpdateConnection {
  pageInfo: PageInfo;
  edges: UpdateEdge[];
}

export interface UpdateConnectionPromise
  extends Promise<UpdateConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UpdateEdge>>() => T;
  aggregate: <T = AggregateUpdatePromise>() => T;
}

export interface UpdateConnectionSubscription
  extends Promise<AsyncIterator<UpdateConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UpdateEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUpdateSubscription>() => T;
}

export interface PageInfo {
  hasNextPage: Boolean;
  hasPreviousPage: Boolean;
  startCursor?: String;
  endCursor?: String;
}

export interface PageInfoPromise extends Promise<PageInfo>, Fragmentable {
  hasNextPage: () => Promise<Boolean>;
  hasPreviousPage: () => Promise<Boolean>;
  startCursor: () => Promise<String>;
  endCursor: () => Promise<String>;
}

export interface PageInfoSubscription
  extends Promise<AsyncIterator<PageInfo>>,
    Fragmentable {
  hasNextPage: () => Promise<AsyncIterator<Boolean>>;
  hasPreviousPage: () => Promise<AsyncIterator<Boolean>>;
  startCursor: () => Promise<AsyncIterator<String>>;
  endCursor: () => Promise<AsyncIterator<String>>;
}

export interface UpdateEdge {
  node: Update;
  cursor: String;
}

export interface UpdateEdgePromise extends Promise<UpdateEdge>, Fragmentable {
  node: <T = UpdatePromise>() => T;
  cursor: () => Promise<String>;
}

export interface UpdateEdgeSubscription
  extends Promise<AsyncIterator<UpdateEdge>>,
    Fragmentable {
  node: <T = UpdateSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUpdate {
  count: Int;
}

export interface AggregateUpdatePromise
  extends Promise<AggregateUpdate>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUpdateSubscription
  extends Promise<AsyncIterator<AggregateUpdate>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface UserConnection {
  pageInfo: PageInfo;
  edges: UserEdge[];
}

export interface UserConnectionPromise
  extends Promise<UserConnection>,
    Fragmentable {
  pageInfo: <T = PageInfoPromise>() => T;
  edges: <T = FragmentableArray<UserEdge>>() => T;
  aggregate: <T = AggregateUserPromise>() => T;
}

export interface UserConnectionSubscription
  extends Promise<AsyncIterator<UserConnection>>,
    Fragmentable {
  pageInfo: <T = PageInfoSubscription>() => T;
  edges: <T = Promise<AsyncIterator<UserEdgeSubscription>>>() => T;
  aggregate: <T = AggregateUserSubscription>() => T;
}

export interface UserEdge {
  node: User;
  cursor: String;
}

export interface UserEdgePromise extends Promise<UserEdge>, Fragmentable {
  node: <T = UserPromise>() => T;
  cursor: () => Promise<String>;
}

export interface UserEdgeSubscription
  extends Promise<AsyncIterator<UserEdge>>,
    Fragmentable {
  node: <T = UserSubscription>() => T;
  cursor: () => Promise<AsyncIterator<String>>;
}

export interface AggregateUser {
  count: Int;
}

export interface AggregateUserPromise
  extends Promise<AggregateUser>,
    Fragmentable {
  count: () => Promise<Int>;
}

export interface AggregateUserSubscription
  extends Promise<AsyncIterator<AggregateUser>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Int>>;
}

export interface BatchPayload {
  count: Long;
}

export interface BatchPayloadPromise
  extends Promise<BatchPayload>,
    Fragmentable {
  count: () => Promise<Long>;
}

export interface BatchPayloadSubscription
  extends Promise<AsyncIterator<BatchPayload>>,
    Fragmentable {
  count: () => Promise<AsyncIterator<Long>>;
}

export interface UpdateSubscriptionPayload {
  mutation: MutationType;
  node: Update;
  updatedFields: String[];
  previousValues: UpdatePreviousValues;
}

export interface UpdateSubscriptionPayloadPromise
  extends Promise<UpdateSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UpdatePromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UpdatePreviousValuesPromise>() => T;
}

export interface UpdateSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UpdateSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UpdateSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UpdatePreviousValuesSubscription>() => T;
}

export interface UpdatePreviousValues {
  id: ID_Output;
  date: DateTimeOutput;
}

export interface UpdatePreviousValuesPromise
  extends Promise<UpdatePreviousValues>,
    Fragmentable {
  id: () => Promise<ID_Output>;
  date: () => Promise<DateTimeOutput>;
}

export interface UpdatePreviousValuesSubscription
  extends Promise<AsyncIterator<UpdatePreviousValues>>,
    Fragmentable {
  id: () => Promise<AsyncIterator<ID_Output>>;
  date: () => Promise<AsyncIterator<DateTimeOutput>>;
}

export interface UserSubscriptionPayload {
  mutation: MutationType;
  node: User;
  updatedFields: String[];
  previousValues: UserPreviousValues;
}

export interface UserSubscriptionPayloadPromise
  extends Promise<UserSubscriptionPayload>,
    Fragmentable {
  mutation: () => Promise<MutationType>;
  node: <T = UserPromise>() => T;
  updatedFields: () => Promise<String[]>;
  previousValues: <T = UserPreviousValuesPromise>() => T;
}

export interface UserSubscriptionPayloadSubscription
  extends Promise<AsyncIterator<UserSubscriptionPayload>>,
    Fragmentable {
  mutation: () => Promise<AsyncIterator<MutationType>>;
  node: <T = UserSubscription>() => T;
  updatedFields: () => Promise<AsyncIterator<String[]>>;
  previousValues: <T = UserPreviousValuesSubscription>() => T;
}

export interface UserPreviousValues {
  username: ID_Output;
  createdAt: DateTimeOutput;
  firstname: String;
  surname: String;
  password: String;
  role: Role;
  status: Status;
}

export interface UserPreviousValuesPromise
  extends Promise<UserPreviousValues>,
    Fragmentable {
  username: () => Promise<ID_Output>;
  createdAt: () => Promise<DateTimeOutput>;
  firstname: () => Promise<String>;
  surname: () => Promise<String>;
  password: () => Promise<String>;
  role: () => Promise<Role>;
  status: () => Promise<Status>;
}

export interface UserPreviousValuesSubscription
  extends Promise<AsyncIterator<UserPreviousValues>>,
    Fragmentable {
  username: () => Promise<AsyncIterator<ID_Output>>;
  createdAt: () => Promise<AsyncIterator<DateTimeOutput>>;
  firstname: () => Promise<AsyncIterator<String>>;
  surname: () => Promise<AsyncIterator<String>>;
  password: () => Promise<AsyncIterator<String>>;
  role: () => Promise<AsyncIterator<Role>>;
  status: () => Promise<AsyncIterator<Status>>;
}

/*
The `ID` scalar type represents a unique identifier, often used to refetch an object or as key for a cache. The ID type appears in a JSON response as a String; however, it is not intended to be human-readable. When expected as an input type, any string (such as `"4"`) or integer (such as `4`) input value will be accepted as an ID.
*/
export type ID_Input = string | number;
export type ID_Output = string;

/*
DateTime scalar input type, allowing Date
*/
export type DateTimeInput = Date | string;

/*
DateTime scalar output type, which is always a string
*/
export type DateTimeOutput = string;

/*
The `String` scalar type represents textual data, represented as UTF-8 character sequences. The String type is most often used by GraphQL to represent free-form human-readable text.
*/
export type String = string;

/*
The `Int` scalar type represents non-fractional signed whole numeric values. Int can represent values between -(2^31) and 2^31 - 1.
*/
export type Int = number;

/*
The `Boolean` scalar type represents `true` or `false`.
*/
export type Boolean = boolean;

export type Long = string;

/**
 * Model Metadata
 */

export const models: Model[] = [
  {
    name: "User",
    embedded: false
  },
  {
    name: "Update",
    embedded: false
  },
  {
    name: "Role",
    embedded: false
  },
  {
    name: "Status",
    embedded: false
  }
];

/**
 * Type Defs
 */

export const Prisma = makePrismaClientClass<ClientConstructor<Prisma>>({
  typeDefs,
  models,
  endpoint: `https://standup-data-6db503664d.herokuapp.com/standup-data/dev`,
  secret: `${process.env["PRISMA_STANDUP_SECRET"]}`
});
export const prisma = new Prisma();
