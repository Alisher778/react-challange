import * as actionTypes from '../actions/actionTypes';

const initialState = {
  companies: [], pending: false, error: null, errMsg: '', selectedCompany: {},
};


const companyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ERROR: {
      return {
        ...state,
        companies: [],
        pending: false,
        error: true,
        errMsg: action.error,
      };
    }
    case actionTypes.FETCH_PENDING: {
      return {
        ...state,
        companies: [],
        pending: true,
        error: null,
        errMsg: '',
      };
    }
    case actionTypes.FETCH_COMPANIES: {
      return {
        ...state,
        companies: action.data,
        pending: false,
        error: null,
        errMsg: '',
      };
    }
    default: {
      return state;
    }
  }
};

const selectedCompanyState = {
  selectedCompany: {},
  pending: false,
  error: null,
  errMsg: '',
};
const selectedCompanyReducer = (state = selectedCompanyState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_COMPANY_ERROR: {
      return {
        ...state,
        pending: false,
        error: true,
        errMsg: action.error,
      };
    }
    case actionTypes.SEARCH_COMPANY_PENDING: {
      return {
        ...state,
        pending: true,
        error: null,
        errMsg: '',
      };
    }
    case actionTypes.SELECTED_COMPANY: {
      return {
        ...state,
        pending: false,
        error: null,
        errMsg: '',
        selectedCompany: { ...action.data },
      };
    }
    default: {
      return state;
    }
  }
};


export { companyReducer, selectedCompanyReducer };
