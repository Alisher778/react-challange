import { CREATE_COMMENT } from './actionTypes';

export const createComment = (data) => {
    return {
        type: CREATE_COMMENT,
        data
    }
}
