import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { browserHistory } from 'react-router';
import allReducers from './reducers';
import Routes from './routes';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

const store = createStore(allReducers, applyMiddleware(
    thunkMiddleware,
    loggerMiddleware
  )
);

const loggerMiddleware = createLogger();

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>, 
  document.getElementById('root')
); 
