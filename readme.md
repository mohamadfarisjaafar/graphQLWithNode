GraphQL API with Node.js and Express

This project is a simple GraphQL API built using Node.js, Express, and the express-graphql middleware. The API has basic functionalities to retrieve and manage user data.

Table of Contents

Features
Requirements
Installation
Usage
GraphQL Queries and Mutations
Testing with Postman
License
Features

A GraphQL API endpoint to query and manipulate user data.
Supports basic queries, such as fetching a user by ID.
Provides a GraphiQL interface for easy testing.
Requirements

Node.js (v14 or above)
NPM or Yarn
Installation

Clone this repository:
git clone https://github.com/your-username/graphql-node-example.git
cd graphql-node-example
Install the dependencies:
npm install
Usage

Start the server:
node index.js
The GraphQL API will be available at http://localhost:4000/graphql.
To test the API, open the URL http://localhost:4000/graphql in your browser. This will open the GraphiQL interface, where you can write and test your GraphQL queries.
GraphQL Queries and Mutations

Example Queries
Query to Get a Greeting Message

query {
  hello
}
Query to Get User by ID

query {
  user(id: "1") {
    name
    email
  }
}
Example Mutation (if mutation functionality is added)
If you add a createUser mutation, an example would look like this:

mutation {
  createUser(name: "Alice", email: "alice@example.com") {
    id
    name
    email
  }
}
Testing with Postman

You can also test the GraphQL API using Postman. Follow these steps:

Set up the request:
Open Postman.
Choose POST as the request type.
Enter the URL: http://localhost:4000/graphql.
Set Headers:
Add a header with:
Key: Content-Type
Value: application/json
Write the GraphQL Query in JSON:
In the Body tab, select raw and choose JSON format.
Enter your GraphQL query in JSON format. For example:
{
  "query": "{ user(id: \"1\") { name email } }"
}
Send the Request:
Click Send and check the response from the server.
Example Queries in JSON Format for Postman
Query to Get a Greeting Message

{
  "query": "{ hello }"
}
Query to Get User by ID

{
  "query": "{ user(id: \"1\") { name email } }"
}
Query with Variables

If your query includes variables, pass them in the variables field like this:

{
  "query": "query getUser($id: ID!) { user(id: $id) { name email } }",
  "variables": {
    "id": "1"
  }
}
License

This project is licensed under the MIT License. See the LICENSE file for details.

