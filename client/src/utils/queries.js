import { gql } from '@apollo/client';


export const QUERY_SINGLE_TEAM = gql`
  query getSingleTeam($teamId: ID!) {
    teams(teamId: $teamId) {
      _id
      name
      fanPost
     
    }
  }
`;
