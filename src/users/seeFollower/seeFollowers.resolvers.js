import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const resolvers = {
  Query: {
    seeFollowers: async (_, { username, page }) => {
      const followers = await client.user
        .findUnique({ where: { username } })
        .followers({
          take: 5,
          skip: (page - 1) * 5,
        });
      return {
        ok: true,
        followers,
      };
    },
  },
};

export default resolvers;
