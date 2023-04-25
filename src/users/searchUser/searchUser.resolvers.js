import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const resolvers = {
  Query: {
    searchUser: async (_, { keyword, cursor }) => {
      const users = client.user.findMany({
        where: {
          username: {
            in: keyword,
          },
        },
        take: 5,
        skip: cursor ? 1 : 0,
        ...(cursor && { cursor: { id: cursor } }),
      });
      return users;
    },
  },
};

export default resolvers;
