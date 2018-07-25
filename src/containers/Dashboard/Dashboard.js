import { connect } from 'react-redux'

import * as actions from '../../actions/index'
import Dashboard from '../../components/Dashboard/Dashboard';


const mapStateToProps = (state) => ({
    totalPages: state.pages.totalPages,
    loading: state.pages.loading,
    users: state.users.users  
})

const mapDispatchToProps = dispatch => {
    return {
        onGetPages: () => dispatch(actions.getTotalPages()),
        onGetUsersByPage: (page) => dispatch(actions.fetchUsersByPage(page)),
        onGetAllUsers: (totalPages) => dispatch(actions.getAllUsers(totalPages))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
