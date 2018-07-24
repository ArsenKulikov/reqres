import * as actionTypes from '../actions/actionTypes';

const initialState = {
    totalPages: null,
    loading: false,
    //error: false
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.GET_PAGES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_PAGES_FAIL:
            return {
                ...state,
                loading: false,
            }
        case actionTypes.GET_PAGES_SUCCESS:
            return {
                ...state,
                totalPages: action.totalPages,
                loading: false
            }
        default: return state
    }
}

export default reducer;