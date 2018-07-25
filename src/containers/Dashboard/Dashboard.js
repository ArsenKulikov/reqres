import { connect } from 'react-redux'

import * as actions from '../../actions/index'
import Dashboard from '../../components/Dashboard/Dashboard';


const mapStateToProps = (state) => ({
    totalPages: state.totalPages,
    loading: state.loading,
    users: state.users  
})

const mapDispatchToProps = dispatch => {
    return {
        onInitialRequest: (totalPages, users) => dispatch(actions.initialRequest(totalPages, users)),
        onGetUsersByPage: (page) => dispatch(actions.fetchUsersByPage(page)),
        onGetAllUsers: (totalPages) => dispatch(actions.getAllUsers(totalPages))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
