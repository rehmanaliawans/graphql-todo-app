const { gql } = require("apollo-server-express");

// type title description authorName language price quantity status
const typeDefs = gql`
  type Query {
    users: [User]
    user(_id: ID!): User
    quotes: [QuoteWithName]
    quotesById(by: ID!): [Quote]
    myProfile: User
  }
  type QuoteWithName {
    name: String
    by: IdName
  }
  type IdName {
    _id: String
    firstName: String
  }
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    password: String
    quotes: [Quote]
  }
  type Quote {
    by: ID
    name: String
  }
  type Token {
    token: String
  }
  type Mutation {
    signUpUser(userNew: UserInput!): User
    signInUser(userSignIn: UserSignInInput!): Token
    createQuote(name: String!): String
  }
  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
  input UserSignInInput {
    email: String!
    password: String!
  }
`;
//Functions which we perform in our project using GraphQL

module.exports = typeDefs;
