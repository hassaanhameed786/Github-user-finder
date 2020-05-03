import React, { Component } from 'react';
import Navbar from './components /layout /Navbar';

import './App.css';
import Users from './components /users/Users';

class App extends Component {
  // eslint-disable-next-line
  render() {
    return (
      <div > 

        <Navbar /> 
        <div className="container">
        <Users/>
        
        </div>
      </div>

     
    );
  }
}

export default App;
