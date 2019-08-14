import * as actionTypes from '../actions/actionTypes';

const initialState = {
  selectedCompany: {},
  pending: false,
  error: null,
  errMsg: '',
};

const selectedCompanyReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_COMPANY_ERROR: {
      return {
        ...state,
        pending: false,
        error: true,
        errMsg: action.payload,
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
        selectedCompany: { ...action.payload },
      };
    }
    default: {
      return state;
    }
  }
};


export default selectedCompanyReducer;
