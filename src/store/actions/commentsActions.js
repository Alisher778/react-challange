import * as actionTypes from './actionTypes';

const createComment = (data) => ({
  type: actionTypes.CREATE_COMMENT,
  payload: {
    id: data.id,
    name: data.name,
    comment: data.comment,
    companyId: data.companyId,
  },
});

export default createComment;
