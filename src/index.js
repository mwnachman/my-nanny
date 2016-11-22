import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { browserHistory } from 'react-router';
import allReducers from './reducers';
import Routes from './routes';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

var store = createStore(allReducers);

ReactDOM.render(
  <Provider store={store}>
    <Routes history={browserHistory} />
  </Provider>, 
  document.getElementById('root')
); 
