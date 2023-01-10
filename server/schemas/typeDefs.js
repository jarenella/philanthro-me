const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Category {
    _id: ID
    name: String
  }

  type Item {
    _id: ID
    name: String
    store: String
  }

  type User {
    _id: ID
    name: String
    email: String
    userType: String
    orders: [Order]
  }
  
  type Order {
    _id: ID
    purchaseDate: String
    items: [Item]
  }

  type Store {
    _id: ID
    name: String
    category: Category
    associatedNonProfit: NonProfit
    items: [Item]
  }

  type NonProfit {
    _id: ID
    name: String
    category: Category
  }

  type Checkout {
    session: ID
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    categories: [Category]
    items(category: ID, name: String): [Item]
    item(_id: ID!): Item
    user: User
    order(_id: ID!): Order
    
  }

  type Mutation {
    addUser(name: String!, email: String!, password: String!): Auth
    addOrder(items: [ID]!): Order
    updateUser(name: String, email: String, password: String): User
    updateItem(_id: ID!, quantity: Int!): Item
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;