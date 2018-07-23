import * as types from "./actionTypes";

export function addToCart(item: any) {
  return {
    type: types.ADD_TO_CART,
    payload: {
      item
    }
  };
}

export function removeFromCart() {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {}
  };
}

export function openModal(item: any) {
  return {
    type: types.OPEN_MODAL,
    payload: {
      item
    }
  };
}

export function closeModal() {
  return {
    type: types.CLOSE_MODAL
  }
}

export function search(input) {
  return {
    type: types.SEARCH
  }
}
