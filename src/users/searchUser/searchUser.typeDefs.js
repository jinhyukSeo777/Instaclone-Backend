import { gql } from "apollo-server";

const typeDefs = gql`
  type Query {
    searchUser(keyword: String!, cursor: Int): [User]
  }
`;

export default typeDefs;
