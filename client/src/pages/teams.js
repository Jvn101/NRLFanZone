import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { FAN_POST } from '../utils/mutations';
import Auth from '../utils/auth';
// import ThoughtList from '../components/ThoughtList';
// import ThoughtForm from '../components/ThoughtForm';

// import { QUERY_THOUGHTS } from '../utils/queries';
import { QUERY_TEAM} from '../utils/queries';

const Team = () => {
//   const { loading, data } = useQuery(QUERY_THOUGHTS);
//   const thoughts = data?.thoughts || [];

const [formState, setFormState] = useState({ fanPost: ''});
const [Team, { error, data }] = useMutation(FAN_POST);
const { teamid: teamParam } = useParams();

const { teamId } = useParams();
const handleChange = (event) => {
  const { name, value } = event.target;
  // console.log(name);
  // console.log(value);

  setFormState({
    ...formState,
    [name]: value,
  });
};

// submit form
const handleFormSubmit = async (event) => {
  event.preventDefault();
  console.log(formState);
  

  // clear form values
  setFormState({
    fanPost: '',
    
  });
};

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
        <form onSubmit={handleFormSubmit}>
                
                <input
                  className="form-input"
                  placeholder="Enter your Abuse here!!"
                  name="fanPost"
                  type="textarea"
                  value={formState.fanPost}
                  onChange={handleChange}
                />
                <button
                  className="btn btn-block btn-primary"
                  style={{ cursor: 'pointer' }}
                  type="submit"
                >
                  Submit
                </button>
              </form>
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