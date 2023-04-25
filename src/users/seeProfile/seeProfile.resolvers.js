import client from "../../client";

const resolvers = {
  Query: {
    seeProfile: async (_, { username }) => {
      const user = await client.user.findUnique({
        where: { username },
        include: { following: true, followers: true },
      });
      if (!user) {
        //...
      }
      return user;
    },
  },
};

export default resolvers;
