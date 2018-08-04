import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "redux-saga";

import cartReducer from "./reducers/cart";
import productsReducer from "./reducers/products";
import logger from "./middleware/logger";
import saga from './sagas/saga';

// Instantiate saga middleware
const sagaMiddleware = createSagaMiddleware();
const MIDDLEWARES = [
  sagaMiddleware,
  logger
];
const ROOT_REDUCER = combineReducers({
  cart: cartReducer,
  products: productsReducer
});
const COMPOSE_ENHANCERS =
  (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const ENHANCER = COMPOSE_ENHANCERS(applyMiddleware(...MIDDLEWARES));
const STORE = createStore(ROOT_REDUCER, ENHANCER);

// Start up the generator
sagaMiddleware.run(saga);

export default STORE;
