import { useReducer } from "react";

import { UPDATE_TEAMPOST, DELETE_TEAMPOST } from "./actions";

export const reducer = (state, action) => {
  switch (action.type) {
    case UPDATE_TEAMPOST:
      return {
        ...state,
        post: [...action.post],
      };

    case DELETE_TEAMPOST:
      return {
        ...state,
        post: [...action.post],
      };

    default:
      return state;
  }
};

export function usePostReducer(initialState) {
    return useReducer(reducer, initialState)
  }
