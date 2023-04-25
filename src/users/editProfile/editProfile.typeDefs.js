import { gql } from "apollo-server";

const typeDefs = gql`
  scalar Upload
  type editProfileResult {
    ok: Boolean!
    error: String
  }
  type Mutation {
    editProfile(
      firstName: String
      lastName: String
      username: String
      email: String
      password: String
      bio: String
      avatar: Upload
    ): editProfileResult
  }
`;

export default typeDefs;
