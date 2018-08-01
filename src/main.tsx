import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import App from "./app/components/App";
import STORE from './app/store/store';
import "./scss/main.scss";

const ROOT = document.getElementById("app");

ReactDOM.render(
  <Provider store={STORE}>
    <App />
  </Provider>,
  ROOT
);
