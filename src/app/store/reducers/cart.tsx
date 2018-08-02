import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export default function(state: Array<Object> = [], action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      const helper = {};
      return [...state, action.payload].reduce((acc, value) => {
        let key = value.data._id;
        if (!helper[key]) {
          helper[key] = Object.assign({ qty: 1 }, value);
          acc.push(helper[key]);
        } else {
          helper[key].qty++;
        }

        return acc;
      }, []);
    case REMOVE_FROM_CART:
      return state
        .map((item: any) => {
          if (item.data._id === action.payload.data._id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        })
        .filter((item: any) => {
          if (item.data._id === action.payload.data._id && item.qty < 1) {
            return false;
          }
          return true;
        });
    default:
      return state;
  }
}
