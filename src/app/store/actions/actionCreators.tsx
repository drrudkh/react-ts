import { ADD_TO_CART, REMOVE_FROM_CART, OPEN_MODAL, CLOSE_MODAL } from "./actionTypes";

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

export function openModal(item: any) {
  return {
    type: OPEN_MODAL,
    payload: {
      item
    }
  };
}

export function closeModal() {
  return {
    type: CLOSE_MODAL
  }
}
