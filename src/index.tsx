import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StoreProvider, createStore } from "easy-peasy";
import store from './easy_peasy/store'
ReactDOM.render(
  <StoreProvider store={store}>
  <App />
  </StoreProvider>,
  document.getElementById('root')
);

reportWebVitals();
