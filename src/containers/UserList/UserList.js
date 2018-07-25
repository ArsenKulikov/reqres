import React, { Component } from 'react';
import { connect } from 'react-redux';
import { UserList } from '../../components/UserList/UserList';

const mapStateToProps = (state) => ({
    users: state.users,
    loading: state.loading,
    totalPages: state.totalPages
})

export default connect(mapStateToProps)(UserList);
