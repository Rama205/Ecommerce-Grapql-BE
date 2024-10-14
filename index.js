const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const mongoose = require('mongoose');

const typeDefs = require('./src/schema/schema');
const resolvers = require('./src/resolvers/resolvers');

const startServer = async () => {
  const app = express();

  // Create an Apollo server with schema and resolvers
  const server = new ApolloServer({ typeDefs, resolvers });

  // Apply middleware to express app
  await server.start();
  server.applyMiddleware({ app });

  // Connect to MongoDB
  mongoose.connect('mongodb://localhost:27017/ecommerce', { useNewUrlParser: true, useUnifiedTopology: true });

  // Start the server
  app.listen(4000, () => {
    console.log('Server is running on http://localhost:4000' + server.graphqlPath);
  });
};

startServer();
