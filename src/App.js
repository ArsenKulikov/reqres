import React, { Component } from 'react';

import './App.css';
import UserList from './containers/UserList/UserList';
import Dashboard from './containers/Dashboard/Dashboard';

class App extends Component {
  
  render() {
 
    return (
      <div className="App">
          <Dashboard />
          <UserList/>
      </div>)
    }
}

export default App;
