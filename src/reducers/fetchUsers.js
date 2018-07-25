import * as actionTypes from '../actions/types/actionTypes'

const initialState = {
    users: [],
    loading: false,
    totalPages: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_USERS_START:
            return ({
                ...state,
                loading: true
            });
        case actionTypes.FETCH_USERS_FAIL:
            return ({
                ...state,
                loading: false
            });
        case actionTypes.FETCH_USERS_SUCCESS:
            return ({
                ...state,
                loading: false,
                users: action.users,
            });
        case actionTypes.FETCH_ALL_USERS_START:
            return ({
                ...state,
                loading: true
            });
        case actionTypes.FETCH_ALL_USERS_FAIL:
            return ({
                ...state,
                loading: false
            });
        case actionTypes.FETCH_ALL_USERS_SUCCESS:
            return ({
                ...state,
                loading: false,
                users: action.users
            });
            case actionTypes.INITIAL_REQUEST_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.INITIAL_REQUEST_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.INITIAL_REQUEST_SUCCESS:
            return {
                ...state,
                totalPages: action.totalPages,
                loading: false,
                users: action.users
            }

        default: return state
    }
};

export default reducer;
