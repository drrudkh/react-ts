import { OPEN_MODAL, CLOSE_MODAL } from "../actions/actionTypes";

export default function modalReducer(
  state = {
    show: false
  },
  action
) {
  switch (action.type) {
    case OPEN_MODAL:
    return {
        show: true,
        ...action.payload
    }
    case CLOSE_MODAL:
    return {
      show: false
    }  
    default:
      return state;
  }
}
