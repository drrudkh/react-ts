import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers } from "redux";

import App from "./app/components/App";
import shoppingCartReducer from "./app/store/reducers/shoppingCart";
import modalReducer from './app/store/reducers/modal';
import "./scss/main.scss";

const ROOT = document.getElementById("app");
const ROOT_REDUCER = combineReducers({
  cart: shoppingCartReducer,
  modal: modalReducer
})
const STORE = createStore(ROOT_REDUCER);

STORE.subscribe(() => {console.log(STORE.getState())})

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  ROOT
);
