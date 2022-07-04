import {  gql } from '@apollo/client';

export const FLASHCARD_QUERY = gql`
{
  flashcards {
    id
    title
    question
    answer
    createdBy{
      names
    }
  }
}
`
;

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

export const CREATE_FLASHCARD = gql`
mutation CREATE_FLASHCARD(
  $title: String!
  $answer: String!
  $question: String!
) {
  create(answer: $answer, question: $question, title: $title) {
    title
  }
}
`;
