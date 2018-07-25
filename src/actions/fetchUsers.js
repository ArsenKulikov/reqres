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
        
        const promises = Array.from(Array(totalPages).keys()).map( page => {
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






