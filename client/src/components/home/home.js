import React, { Component } from 'react';
import logo from './logo.svg';
import { NavLink } from 'react-router-dom';
import './home.css';

class App extends Component {
    render() {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to WinIt</h1>
          </header>
          <p className="App-intro">
            Win elections, the easy way
          </p>
          <button
            onClick={(e) => window.location='./getOut'}
          >
            Sign in with Google
          </button>
          <NavLink
            to="/getout"
            activeClassName="selected"
            className= "nalink"
            >
            Sign in with Google
          </NavLink>
        </div>
      );
    }
  }
  
  export default App;
  