import { gql } from '@apollo/client';


export const QUERY_THOUGHTS = gql`
query getThoughts($Team: ID) {
    FanPost(Team: $Team) {
      _id
      title
      description
      team
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