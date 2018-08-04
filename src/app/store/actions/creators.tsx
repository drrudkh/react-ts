import * as types from "./types";

export function requestData() {
  return {
    type: types.REQUEST_DATA
  }
}

export function requestDataFailed(error) {
  return {
    type: types.REQUEST_DATA_FAILED,
    error
  }
}

export function fetchData(data) {
  return {
    type: types.FETCH_DATA,
    payload: data
  }
}

export function addToCart(item: any) {
  return {
    type: types.ADD_TO_CART,
    payload: {
      ...item
    }

  };
}

export function removeFromCart(item: any) {
  return {
    type: types.REMOVE_FROM_CART,
    payload: {
      _id: item.data._id
    }
  };
}
