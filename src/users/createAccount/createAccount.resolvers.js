import client from "../../client";
import bcrypt from "bcrypt";

const resolvers = {
  Mutation: {
    createAccount: async (
      _,
      { firstName, lastName, username, email, password }
    ) => {
      const isExist = await client.user.findFirst({
        where: { OR: [{ username }, { email }] },
      });
      //already exists
      if (isExist) {
        return {
          ok: false,
          error: "already exists",
        };
      }
      const hashedPassword = await bcrypt.hash(password, 10);
      await client.user.create({
        data: {
          firstName,
          lastName,
          username,
          email,
          password: hashedPassword,
        },
      });
      return {
        ok: true,
      };
    },
  },
};

export default resolvers;
