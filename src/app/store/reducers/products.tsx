import { SEARCH } from "../actions/actionTypes";

import books from "../../../books.json";

export default function productsReducer(state: Array<Object> = books, action) {
  switch (action.type) {
    default:
      return state;
  }
}
