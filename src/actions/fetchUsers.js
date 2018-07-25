import axios from '../axios-instance';
import * as actionTypes from './types/actionTypes';


export const fetchUsersStart = () => {
    return {
        type: actionTypes.FETCH_USERS_START
    }
};

export const fetchUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_USERS_FAIL,
        error: error
    }
};

export const fetchUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_USERS_SUCCESS,
        users: users
    } 
};

export const fetchAllUsersStart = () => {
    return {
        type: actionTypes.FETCH_ALL_USERS_START
    }
};

export const fetchAllUsersFail = (error) => {
    return {
        type: actionTypes.FETCH_ALL_USERS_FAIL,
        error: error
    }
};

export const fetchAllUsersSuccess = (users) => {
    return {
        type: actionTypes.FETCH_ALL_USERS_SUCCESS,
        users: users
    } 
};

export const initialRequestStart = () => {
    return {
        type: actionTypes.INITIAL_REQUEST_START
    };
};

export const initialRequestFail = (error) => {
    return {
        type: actionTypes.INITIAL_REQUEST_FAIL,
        error: error
    };
};

export const initialRequestSuccess = (totalPages, users) => {
    return {
        type: actionTypes.INITIAL_REQUEST_SUCCESS,
        totalPages: totalPages,
        users: users
    }
}

export const initialRequest = () => {
    return dispatch => {
        dispatch(initialRequestStart());
        axios.get()
            .then(res => {
                const pagesCount = res.data.total_pages
                const users = res.data.data
                console.log(users)
                const totalPages = Array.from(Array(pagesCount).keys())
                dispatch(initialRequestSuccess(totalPages, users))
            })
            .catch( err => {
                dispatch(initialRequestFail(err))
            })
    }
}


export const fetchUsersByPage = (page) => {
    return dispatch => {
        dispatch(fetchUsersStart());
        axios.get('?page=' + page)
        .then(res => {
            const fetchedUsers = res.data.data
            console.log(fetchedUsers)
            dispatch(fetchUsersSuccess(fetchedUsers));
        })
        .catch(error => {
            dispatch(fetchUsersFail(error));
        }) 
    }
}

export const getAllUsers = (totalPages) => {
    return dispatch => {
        dispatch(fetchAllUsersStart());
        
        const promises = totalPages.map( page => {
            return axios.get('?page=' + `${page + 1}`)
        })

        Promise.all(promises)
            .then( res => {
                console.log(res.data)
                let data = []
                for (const key in res) {
                    if (res.hasOwnProperty(key)) {
                        const response = res[key].data.data;
                        data.push(response)                    
                    }
                }

                return data
            })
            .then( data => {
                const users = data.reduce((acc, el) => acc.concat(el), [])

                dispatch(fetchAllUsersSuccess(users));
            })
    };
};






