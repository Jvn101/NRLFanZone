import { gql } from '@apollo/client';


export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      
    }
  }
`;
export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;
export const ADD_COMMENT = gql`
  mutation addComment($teamId: ID!, $commentText: String!) {
    addComment(teamId: $teamId, commentText: $commentText) {
      _id
      name
      fanPost
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;