const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');
const { find, filter } = require('lodash')
const students = require('./students')


const app = express();

const typeDefs = gql`
 type Student {
   name: String
   age: Int
 }

 type Query {
   student: Student
 }
`;

// A map of functions which return data for the schema.
const resolvers = {
  Student: {
    students(name) {
      return find(students, {name: name})
    }
  }
};


const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);