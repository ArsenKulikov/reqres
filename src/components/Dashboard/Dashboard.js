import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as actions from '../../actions/index'
import Spinner from '../../components/UI/Spinner/Spinner';

class Dashboard extends Component {
    
    componentDidMount () {
        this.props.onInitialRequest();
    }

    shouldComponentUpdate (nextProps, nextState) {
        return this.props.totalPages !== nextProps.totalPages
    }
    
    render() {
        
        if ( !this.props.loading && this.props.totalPages !== null ) {
            let buttons = this.props.totalPages.map( page => {
                page++
                return (<button
                    key={page}
                    onClick={() => this.props.onGetUsersByPage(page)}>Page: {page}</button>)
            })
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
        return (
            <h3>Loading...</h3>
        )
    }
}


export default Dashboard;
