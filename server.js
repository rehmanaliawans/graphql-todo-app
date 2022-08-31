/** @format */

const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const jwt = require("jsonwebtoken");

//Database Connection
const URL =
  "mongodb+srv://book-store:(12BookStore@cluster0.hyjvbgq.mongodb.net/?retryWrites=true&w=majority";

//MiddleWare
const context = ({ req }) => {
  const { authorization } = req.headers;
  if (authorization) {
    const { userId } = jwt.verify(authorization, "graphqlsecret");
    return { userId };
  }
};

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context,
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

mongoose
  .connect(URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("mongoose connected");
    return apolloServer.listen({ port: 4000 });
  })
  .then((res) => {
    console.log("server running on ", res.url);
  });

//Set Server for backend with GraphQl and Express

// const startServer = async (app, httpServer) => {
//   const apolloServer = new ApolloServer({
//     typeDefs,
//     resolvers,
//     context: ({ req }) => ({ req }),
//   });
//   await apolloServer.listen({ port: 4000 });
// };
// //call startServer function for runing the function
// startServer();
