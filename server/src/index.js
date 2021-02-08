// src/index.js
const express = require('express');
const { ApolloServer } = require('apollo-server-express')
const typeDefs = require('./schema')
const resolvers = require('./resolvers')
const models = require('../models')

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: { models }
})

server.applyMiddleware({ app });

models.sequelize.authenticate();
models.sequelize.sync();

app.use((req, res) => {
  res.status(200);
  res.send('Hello! naja');
  res.end();
});

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)