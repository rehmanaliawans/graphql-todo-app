import { gql } from "@apollo/client";

export const SIGN_UP_USER = gql`
  mutation createUser($userNew: UserInput!) {
    user: signUpUser(userNew: $userNew) {
      firstName
    }
  }
`;
export const LOGIN_USER = gql`
  mutation signInNewUser($userSingin: UserSignInInput!) {
    user: signInUser(userSignIn: $userSingin) {
      token
    }
  }
`;
export const CREATE_QUOTE = gql`
  mutation createQuote($quote: String!) {
    quote: createQuote(name: $quote)
  }
`;
