import { SEARCH } from "../actions/actionTypes";

import books from "../../../books.json";

const INITIAL_STATE = {
  productsDisplayed: books,
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
