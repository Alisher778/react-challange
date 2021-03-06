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
        errMsg: action.payload,
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
        companies: action.payload,
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

export default companyReducer;
