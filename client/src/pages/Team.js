import React from 'react';
// import { useQuery } from '@apollo/client';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';
// import { QUERY_THOUGHTS } from '../utils/queries';

const Team = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <h3>Teams List Page</h3>
          {/* <ThoughtForm /> */}
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
        </div>
      </div>
    </main>
  );
};

export default Team;


// Teams copy from corey's code 
// import { useParams } from 'react-router-dom';

// export const Teams = () => {

//   const { teamId } = useParams();
  
//   return (
//     <div>
//       Viewing details for team {teamId}
//     </div>
//   )
// }
// end of insert