import * as actionTypes from '../actions/actionTypes';

const initialState = {
  search: [], pending: false, error: null, errMsg: '',
};


const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SEARCH_COMPANY_ERROR: {
      return {
        ...state,
        search: [],
        pending: false,
        error: true,
        errMsg: action.error,
      };
    }
    case actionTypes.SEARCH_COMPANY_PENDING: {
      return {
        ...state,
        search: [],
        pending: true,
        error: null,
        errMsg: '',
      };
    }
    case actionTypes.SEARCH_COMPANY: {
      return {
        ...state,
        search: action.data,
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


export default searchReducer;
