import { ADD_TO_CART, REMOVE_FROM_CART, TOGGLE_MODAL } from "./actionTypes";

export function addToCart(item: any) {
  return {
    type: ADD_TO_CART,
    payload: {
      item
    }
  };
}

export function removeFromCart() {
  return {
    type: REMOVE_FROM_CART,
    payload: {}
  };
}

export function showModal(item) {
  return {
    type: TOGGLE_MODAL,
    payload: {
      item
    }
  };
}

export function closeModal() {
  return {
    type: TOGGLE_MODAL
  }
}
