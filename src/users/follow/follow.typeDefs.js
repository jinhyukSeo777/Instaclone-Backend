import { gql } from "apollo-server";

const typeDefs = gql`
  type followResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    follow(username: String!): followResult
  }
`;

export default typeDefs;
