import client from "../../client";
import bcrypt from "bcrypt";
import { protectedResolver } from "../users.utils";

const resolvers = {
  Query: {
    me: protectedResolver((_, __, { loggedInUser }) => {
      return client.user.findUnique({
        where: {
          id: loggedInUser.id,
        },
      });
    }),
  },
};

export default resolvers;
