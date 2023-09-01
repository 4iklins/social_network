import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { state } from './data/state';

ReactDOM.render(
  <BrowserRouter>
    <App {...state} />
  </BrowserRouter>,
  document.getElementById('root')
);
