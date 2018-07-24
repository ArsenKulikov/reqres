import axios from '../../axios-instance';
import * as actionTypes from './actionTypes';

export const getPagesStart = () => {
    return {
        type: actionTypes.GET_PAGES_START
    };
};

export const getPagesFail = (error) => {
    return {
        type: actionTypes.GET_PAGES_FAIL,
        error: error
    };
};


export const getPagesSuccess = (totalPages) => {
    return {
        type: actionTypes.GET_PAGES_SUCCESS,
        totalPages: totalPages
    }
}

export const getTotalPages = () => {
    return dispatch => {
        let totalPages = null;
        dispatch(getPagesStart());
        axios.get()
            .then(res => {
                totalPages = res.data.total_pages
                dispatch(getPagesSuccess(totalPages))
            })
            .catch( err => {
                dispatch(getPagesFail(err))
            })
    }
}