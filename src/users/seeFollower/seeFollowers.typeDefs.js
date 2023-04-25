import { gql } from "apollo-server";

const typeDefs = gql`
  type SeeFollowersResult {
    ok: Boolean!
    error: String
    followers: [User]
    totalPages: Int
  }
  type Query {
    seeFollowers(username: String!, page: Int!): SeeFollowersResult!
  }
`;

export default typeDefs;
