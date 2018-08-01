import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/types';

export default function(state: Array<Object> = [], action: any) {
  switch (action.type) {
    case ADD_TO_CART:
      const helper = {};
      return [...state, action.payload].reduce((acc, value) => {
        let key = value.data._id;
        if (!helper[key]) {
          helper[key] = Object.assign({ count: 1 }, value);
          acc.push(helper[key]);
        } else {
          helper[key].count++;
        }

        return acc;
      }, []);
    default:
      return state;
  }
}
