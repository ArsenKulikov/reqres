import React, { Component } from 'react';
import { connect } from 'react-redux';

import User from '../../components/User/User';
import Spinner from '../../components/UI/Spinner/Spinner';


export class UserList extends Component {
  render() {
    let users = <Spinner />
    
    if (!this.props.loading) {

      const data = this.props.users
      console.log(this.props.users)
      users = []
      for (let key in data) {
          let user = data[key];
          
          users.push(
              <User
                className="User"
                firstName={user.first_name}
                lastName={user.last_name}
                photo={user.avatar}
                key={user.id} /> 
          )
          
        }
         
    }
    return <div>{users}</div>
  }
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    loading: state.users.loading
})

export default connect(mapStateToProps)(UserList);
