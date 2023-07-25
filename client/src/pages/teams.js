import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

// import ThoughtList from '../components/ThoughtList';
import TeamPostForm from '../components/teamPostForm';

import { QUERY_THOUGHTBYTEAM } from '../utils/queries';

const Team = () => {
  const { teamId } = useParams();
const { loading, data } = useQuery(QUERY_THOUGHTBYTEAM, {variables: {teamId}});
const teamPosts = data?.thoughts || [];

console.log("data",teamPosts);

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <h3>Teams List Page</h3>
          <TeamPostForm teamId={teamId}/>
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )} */}
          Viewing details for team {teamId}
        </div>
      </div>
    </main>
  );
};

export default Team;