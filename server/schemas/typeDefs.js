const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Team {
    _id: ID
    name: String
    teamusers: [User]
    fanPost: [FanPost]
   
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
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type FanPost {
    _id: ID
    title: String 
    description: String
    team: Team
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    team: [Team]
    user: [User]
    fanPost: [FanPost]
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addComment(teamId: ID!, commentText: String!): Team
  }
`;

module.exports = typeDefs;
