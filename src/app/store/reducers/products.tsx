import { SEARCH } from "../actions/actionTypes";

const INITIAL_STATE = {
  searchTerm: ""
};

export default function productsReducer(state = INITIAL_STATE, action) {
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
