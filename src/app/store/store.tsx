import { createStore, combineReducers, applyMiddleware, compose } from "redux";

import cartReducer from "./reducers/cart";
import productsReducer from './reducers/products';
import logger from './middleware/logger';
import async from './middleware/async';

const ROOT_REDUCER = combineReducers({
    cart: cartReducer,
    products: productsReducer
  })
  const COMPOSE_ENHANCERS = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const ENHANCER = COMPOSE_ENHANCERS(applyMiddleware(async));
  const STORE = createStore(ROOT_REDUCER, ENHANCER);

  export default STORE;