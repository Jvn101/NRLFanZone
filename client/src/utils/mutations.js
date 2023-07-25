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
export const ADD_TEAMPOST = gql`
  mutation addTeamPost($title: String!, $description: String!, $teamId: ID!) {
    addTeamPost(title: $title, description: $description, teamId: $teamId) {
      _id
      title
      description
      team {
        _id
        title
      }
      
      
    }
  }
`;