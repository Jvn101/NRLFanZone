import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { UpdatePostForm } from './updateTeam';
import { DeletePostButton } from './deteleTeam';



// import ThoughtList from '../components/ThoughtList';
import TeamPostForm from '../components/teamPostForm';
import { useEffect } from 'react';

import { QUERY_THOUGHTBYTEAM } from '../utils/queries';



const Team = () => {
  const { teamId } = useParams();
const { loading, data } = useQuery(QUERY_THOUGHTBYTEAM, {variables: {teamid: teamId}});
const teamPosts = data?.postbyteam || [];

useEffect(() => {
  console.log('data from query');
  console.log(data);
}, [loading, data])


console.log("data",teamPosts);



  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          {/* <h3>Teams List Page</h3> */}
          <TeamPostForm teamId={teamId}/>
        </div>
        <div className="container">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            <ThoughtList
              thoughts={thoughts}
              title="Some Feed for Thought(s)..."
            />
          )} */}

<h4>Viewing posts for your team </h4>
          <h5>Team Posts:</h5>
          
          {teamPosts.map((post) => (
            <div className='post-list post' key={post.id}>
              <h3 className='poststyling'>{post.title}</h3>
          <h4 className='poststyling'>{post.description}</h4>
          <UpdatePostForm post={post} />
          <DeletePostButton post={post} />
              <hr />
            </div>
          ))}

          {/* Viewing details for team {teamId} */}
        </div>
      </div>
    </main>
  );
};


export default Team;