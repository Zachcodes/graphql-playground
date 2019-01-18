import { makeExecutableSchema } from 'apollo-server-express';

import resolvers from './resolvers'
import typeDefs from './typeDefs'

const schema = makeExecutableSchema({
    resolvers,
    typeDefs
})

export default schema;