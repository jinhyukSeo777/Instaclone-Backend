import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    me: User
  }
`;

export default typeDefs;
