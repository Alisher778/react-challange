import * as actionTypes from '../actions/actionTypes';

const initialState = {
  news: [], pending: false, error: null, errMsg: '',
};


const newsReduer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_ERROR: {
      return {
        ...state,
        news: [],
        pending: false,
        error: true,
        errMsg: action.error,
      };
    }
    case actionTypes.FETCH_PENDING: {
      return {
        ...state,
        news: [],
        pending: true,
        error: null,
        errMsg: '',
      };
    }
    case actionTypes.FETCH_NEWS: {
      return {
        ...state,
        news: action.data,
        pending: false,
        error: true,
        errMsg: action.error,
      };
    }

    default: {
      return state;
    }
  }
};


export default newsReduer;
