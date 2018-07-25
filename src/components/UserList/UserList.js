import React, { Component } from 'react';

import User from '../../components/User/User';
import Spinner from '../../components/UI/Spinner/Spinner';

export class UserList extends Component {
  render() {
    let users = <Spinner />
    
    if (!this.props.loading) {
      users = this.props.users.map( user => {
        return (
          <User
            className="User"
            firstName={user.first_name}
            lastName={user.last_name}
            photo={user.avatar}
            key={user.id} /> 
        )
      })      
    }
    return <div>{users}</div>
  }
}

export default UserList;
