import React, { Component } from 'react';
import logo from './assets/logo.svg';
import Nav from '../Nav';
import './app.css';

class App extends Component {

  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="App">
        <h1>App Page</h1>
        <Nav />
        { this.props.children }
      </div>
    );
  }
}

export default App;
