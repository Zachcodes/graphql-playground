const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express');
const { find, filter } = require('lodash')
const students = require('./students')


const app = express()


const schema = gql`
  type Book {
    title: String
    author: Author
  }

  type Author {
    books: [Book]
  }

  type Query {
    author: Author
  }
`;

const resolvers = {
  Query: {
    author(parent, args, context, info) {
      return find(authors, { id: args.id });
    },
  },
  Author: {
    books(author) {
      return filter(books, { author: author.name });
    },
  },
};

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app });

app.listen({ port: 4000 }, () =>
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
);