import { TOGGLE_MODAL } from "../actions/actionTypes";

export default function modalReducer(
  state = {
    show: false
  },
  action
) {
  switch (action.type) {
    case TOGGLE_MODAL:
    return {
        show: !state.show,
        ...action.payload
    }  
    default:
      return state;
  }
}
