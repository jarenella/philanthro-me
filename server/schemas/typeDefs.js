const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type User {
    _id: ID
    firstName: String
    lastName: String
    email: String
    favorites: [NonProfit]
    donation: [NonProfit]
  }

  type NonProfit {
    orgsId: ID!
    name: String
    image: String
    description: String
    logo: String
    donationLink: String
  }

  input NonProfitInput {
    orgsId: String!
    name: String
    image: String
    description: String
    logo: String
    donationLink: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    getAllContactForms: [ContactForm!]!
  }

  type ContactForm {
    id: ID!
    name: String!
    email: String!
    message: String!
    createdAt: String!
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(
      firstName: String!
      lastName: String!
      email: String!
      password: String!
    ): Auth
    saveNonProfit(nonProfitData: NonProfitInput!): User
    removeNonProfit(orgsId: ID!): User
    addNonProfit(nonProfitData: NonProfitInput!): User
    deleteNonProfit(orgsId: ID!): User
    submitContactForm(name: String!, email: String!, message: String!): String!
  }
`;

module.exports = typeDefs;
