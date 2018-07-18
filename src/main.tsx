import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import App from "./app/components/App";
import reducer from "./app/reducers/shopping_cart_reducer";
import "./scss/main.scss";

const ROOT = document.getElementById("app");
const STORE = createStore(reducer);
STORE.subscribe(() => {console.log(STORE.getState())})

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  ROOT
);
