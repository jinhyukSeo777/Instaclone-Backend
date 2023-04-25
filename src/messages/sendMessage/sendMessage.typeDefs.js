import { gql } from "apollo-server";

export default gql`
  type result {
    ok: Boolean!
    error: String
    id: Int
  }

  type Mutation {
    sendMessage(payload: String!, roomId: Int, userId: Int): result!
  }
`;
