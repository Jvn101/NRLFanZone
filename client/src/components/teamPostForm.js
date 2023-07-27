import React, { useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_TEAMPOST } from '../utils/mutations';

const TeamPostForm = ({teamId}) => {

  const [formState, setFormState] = useState({
    title: '',
    description: '',
  });
  const [characterCount, setCharacterCount] = useState(0);

  // Set up our mutation with an option to handle errors
  const [addTeamPost, { error }] = useMutation(ADD_TEAMPOST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    // On form submit, perform mutation and pass in form data object as arguments
    // It is important that the object fields are match the defined parameters in `ADD_THOUGHT` mutation
    try {
      const { data } = addTeamPost({
        variables: { ...formState, teamId },
      });

      window.location.reload();
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'title' && value.length <= 280) {
      setFormState({ ...formState, [name]: value });
      setCharacterCount(value.length);
    } else if (name !== 'title') {
      setFormState({ ...formState, [name]: value });
    }
  };

  return (
    <div>
       <form
        className="flex-row justify-center justify-space-between-md align-center wrap-contact3"
        onSubmit={handleFormSubmit}
      >
        <h3>Whats on your mind footballer!!</h3>

        <p
            className={`m-0 ${
              characterCount === 280 || error ? "text-danger" : ""
            }`}
          >
            Character Count: {characterCount}/280
            {error && <span className="ml-2">Something went wrong...</span>}
          </p>
        <div className="col-12 col-lg-9 spacing">
          <input
            name="title"
            placeholder="Enter title here"
            value={formState.title}
            className="form-input w-100"
            onChange={handleChange}
          >
            


          </input>
        </div>
        <div className="col-12 col-lg-9 spacing">
          <input
            name="description"
            placeholder="Add your post here"
            value={formState.description}
            className="form-input w-100" 
            onChange={handleChange}
          />
          
        </div>

        <div className="col-12 col-lg-3">
          <button
            className="btn btn-primary btn-block py-3 contact3-form-btn spacing "
            type="submit"
          >
            Add Post
          </button>
        </div>
        {error && (
          <div className="col-12 my-3 bg-danger text-white p-3">
            Something went wrong...
          </div>
        )}
      </form>
    </div>
  );
};

export default TeamPostForm;