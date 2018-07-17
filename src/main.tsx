import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

// IMPORT COMPONENTS

import App from "./app/App";
import reducers from './app/reducers/reducers';

// IMPORT SASS`

import "./scss/main.scss";

const ROOT = document.getElementById("app");

ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  ROOT
);
