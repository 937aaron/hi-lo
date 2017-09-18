import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import configureStore from './store/configureStore'

import App from './components/app';
import reducers from './reducers';


const store = configureStore()

ReactDOM.render(
  <Provider store={ store }>
    <App />
  </Provider>
  , document.querySelector('.container'));
