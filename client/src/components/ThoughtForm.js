import React from "react";
// import { useParams } from "react-router-dom";
// import { useQuery } from "@apollo/client";
// import { QUERY_THOUGHTS } from "../utils/queries";
// import { useMutation } from "@apollo/client";
// import React, { useState, useEffect } from "react";

//const [getThoughts, { error, data }] = useMutation(QUERY_THOUGHTS);

// const handleFormSubmit = async (event) => {
//   event.preventDefault();

//   if (!searchInput) {
//     return false;
//   }
// }


const ThoughtForm = () => {
  return (
    <main>
      {/* <h1>{post.title}</h1> */}
      {/* <li key={state.title}>
            {state.description}
          </li> */}

            {/* <Form onSubmit={handleFormSubmit}>
            <Form.Row>
              <Col xs={12} md={8}>
                <Form.Control
                  name="searchInput"
                  value={searchInput}
                  onChange={(e) => setSearchInput(e.target.value)}
                  type="text"
                  size="lg"
                  placeholder="Search for a book"
                />
              </Col> */}
              {/* <Col xs={12} md={4}> */}
               

      <button
        className="btn btn-block btn-primary"
        style={{ cursor: "pointer" }}
        type="submit"
      >
        Submit
      </button>
    </main>
  );
};

export default ThoughtForm;
