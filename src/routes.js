import React from 'react';
import ReactDOM from 'react-dom';
import { Router, IndexRoute, Route } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import Kids from './components/Kids';
import Landing from './components/Landing';
import Login from './components/Login';
import Signup from './components/Signup';
// import Nav from './components/Nav';
import Account from './components/Account';


const Routes = (props) => (

  <Router {...props}>
    <Route path='/' component={Landing} />
      <Route path='login' component={Login} />
      <Route path='signup' component={Signup} />
      <Route path='app' component={App}>
        <Route path='home' component={Home} />
        <Route path='kids' component={Kids} />
        <Route path='account' component={Account} />
      </Route>
  </Router>

);

export default Routes;

