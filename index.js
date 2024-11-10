// index.js
const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const { buildSchema } = require('graphql');

// Define a schema
const schema = buildSchema(`
  type Query {
    hello: String
    user(id: ID!): User
  }

  type User {
    id: ID
    name: String
    email: String
  }
`);

// Define the root resolver
const root = {
  hello: () => 'Hello, world!',
  user: ({ id }) => {
    // Mock data - in a real app, you'd fetch this from a database
    const users = [
      { id: '1', name: 'John Doe', email: 'john@example.com' },
      { id: '2', name: 'Jane Doe', email: 'jane@example.com' }
    ];
    return users.find(user => user.id === id);
  }
};

// Initialize an Express server
const app = express();
app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true, // Enables the GraphiQL interface
}));

// Start the server
app.listen(4000, () => {
  console.log('Running a GraphQL API server at http://localhost:4000/graphql');
});
