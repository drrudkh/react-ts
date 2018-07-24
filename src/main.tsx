import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, combineReducers, applyMiddleware, compose } from "redux";

// APP COMPONENT
import App from "./app/components/App";

// REDUCERS
import shoppingCartReducer from "./app/store/reducers/shoppingCart";
import productsReducer from './app/store/reducers/products';

// MIDDLEWARE
import logger from './app/store/middleware/logger';

// SASS
import "./scss/main.scss";

const ROOT = document.getElementById("app");
const ROOT_REDUCER = combineReducers({
  cart: shoppingCartReducer,
  products: productsReducer
})

// REDUX DEVTOOLS
const COMPOSE_ENHANCERS = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const STORE = createStore(ROOT_REDUCER, COMPOSE_ENHANCERS(applyMiddleware(logger)));

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  ROOT
);
