import * as actionTypes from './actionTypes';

const createComment = (data) => ({
  type: actionTypes.CREATE_COMMENT,
  data,
});

export default createComment;
