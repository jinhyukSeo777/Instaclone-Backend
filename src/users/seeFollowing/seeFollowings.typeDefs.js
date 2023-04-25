import { gql } from "apollo-server";

const typeDefs = gql`
  type SeeFollowingResult {
    ok: Boolean!
    error: String
    following: [User]
  }
  type Query {
    seeFollowings(username: String!, cursor: Int): SeeFollowingResult!
  }
`;

export default typeDefs;
