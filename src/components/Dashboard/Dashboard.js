import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions/index'
import Spinner from '../../components/UI/Spinner/Spinner';

class Dashboard extends Component {
    
    componentDidMount () {
        this.props.onGetPages();
    }
    
    render() {
        let buttons = <Spinner />;
        if ( !this.props.loading ) {
            buttons = Array.from(Array(this.props.totalPages).keys()).map( page => {
                page++
                return (<button
                    key={page}
                    onClick={() => this.props.onGetUsersByPage(page)}>Page: {page}</button>)
            })
        }
        return (
            <div>
                {buttons}
                <button 
                    onClick={() => this.props.onGetAllUsers(this.props.totalPages)}>
                    ALL USERS
                </button>
            </div>
        )
    }
}


export default Dashboard;