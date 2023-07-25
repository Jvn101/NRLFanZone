import { gql } from '@apollo/client';


export const QUERY_TEAMS = gql`
query getTeams {
    team {
      _id
      title
      description
      imgUrl
    }
  }
`;

export const QUERY_THOUGHTBYTEAM =  gql`
query postbyteam($teamid: ID!) {
  postbyteam(teamid: $teamid) {
   _id
    title
    description
  }
}
`;