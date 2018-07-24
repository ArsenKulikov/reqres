import React, { Component } from 'react';

import './App.css';
import UserList from './containers/UserList/UserList';
import Dashboard from './containers/Dashboard/Dashboard';
import Spinner from './components/UI/Spinner/Spinner';



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
