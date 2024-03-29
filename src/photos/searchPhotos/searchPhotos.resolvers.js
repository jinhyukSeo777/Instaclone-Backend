import client from "../../client";

export default {
  Query: {
    searchPhotos: (_, { keyword }) =>
      client.photo.findMany({
        where: {
          caption: {
            contains: keyword,
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      }),
  },
};
