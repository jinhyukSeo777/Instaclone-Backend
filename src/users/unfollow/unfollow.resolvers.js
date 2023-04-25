import client from "../../client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { protectedResolver } from "../users.utils";
import { createWriteStream } from "fs";

const resolvers = {
  Mutation: {
    unfollow: protectedResolver(async (_, { username }, { loggedInUser }) => {
      const isExists = await client.user.findUnique({ where: { username } });
      if (!isExists) {
        return {
          ok: false,
          error: "username is incorrect",
        };
      }
      await client.user.update({
        where: {
          id: loggedInUser.id,
        },
        data: {
          following: {
            disconnect: {
              username,
            },
          },
        },
      });
      return {
        ok: true,
      };
    }),
  },
};

export default resolvers;
