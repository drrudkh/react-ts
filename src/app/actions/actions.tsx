/*
*   ACTION TYPES
*/

export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

/*
*   ACTION CREATORS
*/

export function addToCart(item: any) {
    return {
        type: ADD_TO_CART,
        payload: {
            item
        }
    }
}

export function removeFromCart() {
    return {
        type: REMOVE_FROM_CART,
        payload: {

        }
    }
}

/*
*   OTHER CONSTANTS
*/

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
}