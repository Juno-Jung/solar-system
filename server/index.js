const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const morgan = require('morgan');

const { HOST, PORT } = require('./config');
const typeDefs = require('./schemas/typeDefs');
const resolvers = require('./schemas/resolvers');
const router = require('./router/router');

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

const app = express();
app.use(morgan('tiny'));
app.use(express.json());
server.applyMiddleware({ app });

app.use(router);

app.listen(PORT, () => {
  console.log(`Apollo Server (v0.1) is listening at ${HOST}:${PORT}${server.graphqlPath}`);
});
