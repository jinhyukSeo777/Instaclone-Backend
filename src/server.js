require("dotenv").config();
import express from "express";
import { ApolloServer } from "apollo-server-express";
import schema, { typeDefs, resolvers } from "./schema";
import { getUser } from "./users/users.utils";
import graphqlUploadExpress from "graphql-upload/graphqlUploadExpress.js";
import { SubscriptionServer } from "subscriptions-transport-ws";
import { execute, subscribe } from "graphql";
import { createServer, Server } from "http";

const startServer = async () => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: async (ctx) => {
      if (ctx.req) {
        return {
          loggedInUser: await getUser(ctx.req.headers.token),
        };
      } else {
        const {
          connection: { context },
        } = ctx;
        return {
          loggedInUser: context.loggedInUser,
        };
      }
    },
    plugins: [
      {
        async serverWillStart() {
          return {
            async drainServer() {
              subscriptionServer.close();
            },
          };
        },
      },
    ],
  });

  const app = express();
  await server.start();
  app.use("/static", express.static("uploads"));
  app.use(graphqlUploadExpress());
  server.applyMiddleware({ app });

  const httpServer = createServer(app);
  const subscriptionServer = SubscriptionServer.create(
    {
      schema,
      execute,
      subscribe,
      onConnect: async ({ token }) => {
        if (!token) {
          // disconnect
        }
        const loggedInUser = await getUser(token);
        return {
          loggedInUser,
        };
      },
    },
    { server: httpServer, path: "/graphql" }
  );

  httpServer.listen({ port: 4000 }, () => {
    console.log(`🚀 Server is running ✅`);
  });
  // httpServer.listen(process.env.PORT, () =>
  //   console.log(`🚀 Server is running ✅`)
  // );
};

startServer();
