import {  gql } from '@apollo/client';

export const LOGIN_MUTATION = gql`
mutation LoginMutation(
  $email: String!
  $password: String!
) {
  login(email: $email, password: $password) {
    token
  }
}
`;

export const REGISTER_MUTATION = gql`
mutation RegisterMutation(
  $username: String!
  $email: String!
  $password: String!
) {
  signup(email: $email, password: $password, names: $username) {
    token
  }
}
`;


