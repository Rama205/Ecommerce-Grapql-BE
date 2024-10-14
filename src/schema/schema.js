const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # Define User type
  type User {
    id: ID!
    username: String!
    email: String!
  }

  # Define Product type
  type Product {
    id: ID!
    name: String!
    description: String!
    price: Float!
    stock: Int!
  }

  # Define Order type
  type Order {
    id: ID!
    user: User!
    products: [Product!]!
    quantities: [Int!]!
    total: Float!
  }

  # Queries to retrieve data
  type Query {
    users: [User!]!
    user(id: ID!): User
    products(page: Int, limit: Int): [Product!]!
    product(id: ID!): Product
    orders(userId: ID!): [Order!]!
    order(id: ID!): Order
  }

  # Mutations to modify data
  type Mutation {
    register(username: String!, email: String!, password: String!): User
    updateUser(id: ID!, username: String, email: String): User
    deleteUser(id: ID!): User

    createProduct(name: String!, description: String!, price: Float!, stock: Int!): Product
    updateProduct(id: ID!, name: String, description: String, price: Float, stock: Int): Product
    deleteProduct(id: ID!): Product

    createOrder(userId: ID!, productIds: [ID!]!, quantities: [Int!]!): Order
  }
`;

module.exports = typeDefs;
