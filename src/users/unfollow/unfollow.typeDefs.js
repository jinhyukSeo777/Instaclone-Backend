import { gql } from "apollo-server";

const typeDefs = gql`
  type followResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    unfollow(username: String!): followResult
  }
`;

export default typeDefs;
