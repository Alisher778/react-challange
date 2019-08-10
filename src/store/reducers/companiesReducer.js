import {
    FETCH_COMPANIES,
    FETCH_COMPANIES_ERROR,
    FETCH_COMPANIES_PENDING,
    SELECTED_COMPANY
} from '../actions/actionTypes';

const initialState = { companies: [], pending: false, error: null, errMsg: '', selectedCompany: {} }


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

const selectedCompanyReducer = (state = {}, action) => {
    switch (action.type) {
        case FETCH_COMPANIES_ERROR: {
            return {
                ...state,
                pending: false,
                error: true,
                errMsg: action.error
            }
        }
        case FETCH_COMPANIES_PENDING: {
            return {
                ...state,
                pending: true,
                error: null,
                errMsg: ''
            }
        }
        case SELECTED_COMPANY: {
            return {
                ...state,
                pending: false,
                error: null,
                errMsg: '',
                selectedCompany: { ...action.data }
            }
        }
        default: {
            return state
        }
    }
}


export { companyReducer, selectedCompanyReducer };