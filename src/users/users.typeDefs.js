import { gql } from "apollo-server";

const typeDefs = gql`
  type User {
    id: Int!
    firstName: String!
    lastName: String!
    username: String!
    email: String!
    password: String!
    bio: String
    avatar: String
    followers: [User]
    following: [User]
    createdAt: String!
    updatedAt: String!
    totalFollowing: Int!
    totalFollowers: Int!
    isMe: Boolean!
    isFollowing: Boolean!
    photos: [Photo]
  }
`;

export default typeDefs;
