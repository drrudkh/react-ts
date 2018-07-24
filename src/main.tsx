import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import App from "./app/components/App";
import shoppingCartReducer from "./app/store/reducers/shoppingCart";
import productsReducer from './app/store/reducers/products';
import logger from './app/store/middleware/logger';
import "./scss/main.scss";

const ROOT = document.getElementById("app");
const ROOT_REDUCER = combineReducers({
  cart: shoppingCartReducer,
  products: productsReducer
})
const COMPOSE_ENHANCERS = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ENHANCER = COMPOSE_ENHANCERS(applyMiddleware(logger));

const STORE = createStore(ROOT_REDUCER, ENHANCER);

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  ROOT
);
