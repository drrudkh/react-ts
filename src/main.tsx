import React from 'react';
import ReactDOM from 'react-dom';

// IMPORT COMPONENTS 

import App from './app/App';

// IMPORT SASS 

import './scss/main.scss';

const ROOT = document.getElementById('app');

ReactDOM.render(
    <App />, ROOT
)