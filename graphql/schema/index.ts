const { makeExecutableSchema } = require('apollo-server-express')

const mergedResolvers = require('./resolvers') 
const typeDefs = require('./typeDefs')

const schema = makeExecutableSchema({
    mergedResolvers,
    typeDefs
})

module.exports = schema;