import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/actions";

export default function shoppingCartReducer(
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
