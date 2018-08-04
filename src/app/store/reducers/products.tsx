import { FETCH_DATA } from "../actions/types";

const INITIAL_STATE: Array<Object> = [];

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload
    default:
      return state;
  }
}
