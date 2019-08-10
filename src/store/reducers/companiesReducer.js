import {
    FETCH_COMPANIES,
    FETCH_COMPANIES_ERROR,
    FETCH_COMPANIES_PENDING,
} from '../actions/actionTypes';

const initialState = { companies: [], pending: false, error: null, errMsg: '' }


const companyReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_ERROR: {
            return {
                ...state,
                companies: [],
                pending: false,
                error: true,
                errMsg: action.error
            }
        }
        case FETCH_COMPANIES_PENDING: {
            return {
                ...state,
                companies: [],
                pending: true,
                error: null,
                errMsg: ''
            }
        }
        case FETCH_COMPANIES: {
            return {
                ...state,
                companies: action.data,
                pending: false,
                error: null,
                errMsg: ''
            }
        }
        default: {
            return state
        }
    }
}

export default companyReducer;