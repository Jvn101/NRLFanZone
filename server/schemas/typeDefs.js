const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Team {
    _id: ID
    title: String
    description: String
    imgUrl: String
   
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    post: String
    team: Team
    comments: [Comment]
  }

  type Comment {
    _id: ID
    description: String
    author: String
    user: User
  }

  type Post {
    _id: ID
    title: String 
    description: String
    team: [Team]
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    team: [Team]
    user: [User]
    post: [Post]
    postbyteam(teamid: ID!): [Post]
  }


  type Mutation {
    addTeamPost(title: String!, description: String!): Post
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
