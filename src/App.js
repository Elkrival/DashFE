import React, { Component } from 'react';
import TestAuth from './TestAuth'
import SignUp from './SignUp'
import logo from './wheel.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to TEQCharging</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <TestAuth />
        <SignUp />
      </div>
    );
  }
}

export default App;
