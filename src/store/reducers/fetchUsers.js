import * as actionTypes from '../actions/actionTypes'

const initialState = {
    users: [],
    loading: false,
    //error: null
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

        default: return state
    }
};

export default reducer;
