import { gql } from "apollo-server";

const typeDefs = gql`
  type Mutation {
    createAccount(
      firstName: String!
      lastName: String
      username: String!
      email: String!
      password: String!
    ): MutationResponse
  }
`;

export default typeDefs;
