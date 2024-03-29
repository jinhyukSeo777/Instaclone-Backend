import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const resolvers = {
  Mutation: {
    login: async (_, { username, password }) => {
      const user = await client.user.findUnique({ where: { username } });
      if (!user) {
        return {
          ok: false,
          error: "username is incorrect",
        };
      }
      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return {
          ok: false,
          error: "password is incorrect",
        };
      }
      const token = jwt.sign({ id: user.id }, process.env.SECRET_KEY);
      return {
        ok: true,
        token,
      };
    },
  },
};

export default resolvers;
