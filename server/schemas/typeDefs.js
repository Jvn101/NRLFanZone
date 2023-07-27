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
    team: Team
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    team: [Team]
    user: [User]
    
    postbyteam(teamid: ID!): [Post]
    post(postId: ID!): Post
  }


  type Mutation {
    addTeamPost(title: String!, description: String!, teamId: ID!): Post
    updateTeamPost(postId: ID!, title: String!, description: String!, teamId: ID): Post
    deleteTeamPost(postId: ID!, title: String, description: String, teamId: ID): Post
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`


// removed from queries due to error 
// post: [Post]

module.exports = typeDefs;