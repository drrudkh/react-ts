import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

export default function(
  state: Array<Object> = [],
  action: any
) {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload];
    default:
      return state;
  }
}
