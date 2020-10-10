import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Query = {
  __typename?: 'Query';
  users: Array<User>;
  test_jwt: Scalars['String'];
  cars: Array<Car>;
  car: Car;
  posts: Array<Post>;
  post?: Maybe<Post>;
  hello: Scalars['String'];
  bye: Scalars['String'];
};


export type QueryCarArgs = {
  yearMade: Scalars['Int'];
};


export type QueryPostArgs = {
  id: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  username: Scalars['String'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  tokenVersion: Scalars['Int'];
};

export type Car = {
  __typename?: 'Car';
  yearMade: Scalars['Int'];
  company: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  maxSpeed: Scalars['Int'];
};

export type Post = {
  __typename?: 'Post';
  id: Scalars['Int'];
  createdAt: Scalars['String'];
  updatedAt: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  revokeRefreshTokensForUser: RevokedRefreshTokenResponse;
  login: UserResponse;
  register: UserResponse;
  createCar: Car;
  updateCar?: Maybe<Car>;
  deleteCar: Scalars['Boolean'];
  createPost: Post;
  updatePost?: Maybe<Post>;
  deletePost: Scalars['Boolean'];
};


export type MutationRevokeRefreshTokensForUserArgs = {
  userId: Scalars['Int'];
};


export type MutationLoginArgs = {
  options: UsernamePasswordInput;
};


export type MutationRegisterArgs = {
  options: UsernamePasswordInput;
};


export type MutationCreateCarArgs = {
  options: CreateCarInputType;
};


export type MutationUpdateCarArgs = {
  cost: Scalars['Int'];
  yearMade: Scalars['Int'];
};


export type MutationDeleteCarArgs = {
  yearMade: Scalars['Int'];
};


export type MutationCreatePostArgs = {
  title: Scalars['String'];
};


export type MutationUpdatePostArgs = {
  title: Scalars['String'];
  id: Scalars['Int'];
};


export type MutationDeletePostArgs = {
  id: Scalars['Int'];
};

export type RevokedRefreshTokenResponse = {
  __typename?: 'RevokedRefreshTokenResponse';
  errors?: Maybe<Array<FieldError>>;
  refreshTokenRevoked: Scalars['Boolean'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
  accessToken?: Maybe<Scalars['String']>;
};

export type UsernamePasswordInput = {
  username: Scalars['String'];
  password: Scalars['String'];
};

export type CreateCarInputType = {
  yearMade: Scalars['Int'];
  company: Scalars['String'];
  name: Scalars['String'];
  cost: Scalars['Int'];
  maxSpeed: Scalars['Int'];
};

export type RegisterMutationVariables = Exact<{
  username: Scalars['String'];
  password: Scalars['String'];
}>;


export type RegisterMutation = (
  { __typename?: 'Mutation' }
  & { register: (
    { __typename?: 'UserResponse' }
    & { errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'field' | 'message'>
    )>>, user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'id' | 'username'>
    )> }
  ) }
);


export const RegisterDocument = gql`
    mutation Register($username: String!, $password: String!) {
  register(options: {username: $username, password: $password}) {
    errors {
      field
      message
    }
    user {
      id
      username
    }
  }
}
    `;

export function useRegisterMutation() {
  return Urql.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument);
};