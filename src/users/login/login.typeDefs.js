import { gql } from "apollo-server";

const typeDefs = gql`
  type loginResult {
    ok: Boolean!
    token: String
    error: String
  }
  type Mutation {
    login(username: String!, password: String!): loginResult
  }
`;

export default typeDefs;
