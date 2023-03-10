const { gql } = require('apollo-server-express');

const typeDefs = gql`
  
  type User {
    _id: ID
    name: String
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
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(name: String!, email: String!, password: String!): Auth
    saveNonProfit(nonProfitData: NonProfitInput!): User
    removeNonProfit(orgsId: ID!): User
    addNonProfit(nonProfitData: NonProfitInput!): User
    deleteNonProfit(orgsId: ID!): User
    
  }
`;

module.exports = typeDefs;


/*
type Category {
    _id: ID
    name: String
  }
type Order {
    _id: ID
    purchaseDate: String
    nonProfits: [NonProfit]
  }

   type Checkout {
    session: ID
  }

type Query {
    categories: [Category]
    order(_id: ID!): Order
    nonProfits(category: ID, name: String): [NonProfit]
    nonProfit(_id: ID!): NonProfit

type Mutation {
addOrder(nonProfits: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateNonProfit(_id: ID!, amount: Float!): NonProfit
}
*/