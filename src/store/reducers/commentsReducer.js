import { CREATE_COMMENT } from '../actions/actionTypes';

const initialState = {
  comments: [], pending: false, error: null, errMsg: '',
};


const commentsReduer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_COMMENT: {
      return {
        ...state,
        comments: [...state.comments, action.data],
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


export default commentsReduer;
