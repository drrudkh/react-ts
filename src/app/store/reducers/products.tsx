import { SEARCH } from "../actions/types";

const INITIAL_STATE = {
  searchTerm: ""
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SEARCH: {
      return {
        ...state,
        searchTerm: action.payload
      };
    }
    default:
      return state;
  }
}
