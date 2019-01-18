import { gql } from 'apollo-server-express'

const typeDefs = gql`
type Student {
    name: String!
    age: Int!
}
`;

export default typeDefs;