import * as types from "./types";

export function addToCart(item: any) {
  return {
    type: types.ADD_TO_CART,
    payload: item

  };
}

export function removeFromCart() {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {}
  };
}

export function search(input) {
  return {
    type: types.SEARCH,
    payload: input
  }
}
