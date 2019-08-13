import { CREATE_COMMENT } from './actionTypes';

const createComment = (data) => ({
  type: CREATE_COMMENT,
  data,
});

export default createComment;
