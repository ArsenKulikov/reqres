import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserList } from '../../components/UserList/UserList';

const mapStateToProps = (state) => ({
    users: state.users.users,
    loading: state.users.loading
})

export default connect(mapStateToProps)(UserList);
