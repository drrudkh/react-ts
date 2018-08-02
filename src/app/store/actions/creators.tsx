import axios from 'axios';

import * as types from "./types";

export function addToCart(item: any) {
  return {
    type: types.ADD_TO_CART,
    payload: item

  };
}

export function removeFromCart(item: any) {
  return {
    type: types.REMOVE_FROM_CART,
    payload: item
  };
}

export function fetchData() {
  const request = axios.get('http://localhost:8080/src/books.json');
  return {
    type: types.FETCH_DATA,
    payload: request
  }
}
