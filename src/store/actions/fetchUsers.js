import axios from '../../axios-instance';
import * as actionTypes from './actionTypes';


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
        
        const promises = [];
        for (let page = 1; page <= totalPages; page++) {
            promises.push(axios.get('?page=' + page))
        };
        Promise.all(promises)
            .then( res => {
                let data = [];
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
                console.log(users)
                dispatch(fetchAllUsersSuccess(users));
            })
    };
};






