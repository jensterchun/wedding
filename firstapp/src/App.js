import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Mantra from './components/Mantra';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Mantra piffy="hard"></Mantra>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">
            Welcome to React, runner
          </h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <h1>
            can't touch this
          </h1>
          this is awesome.
        </div>
        <Mantra piffy="fast" />


      </div>
    );
  }
}

export default App;
