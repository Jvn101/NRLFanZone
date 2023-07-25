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
    postbyteam(teamid: ID!): [FanPost]
  }


  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
