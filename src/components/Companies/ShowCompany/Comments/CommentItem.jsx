import React from 'react';
import PropsTypes from 'prop-types';
import { FiUser } from 'react-icons/fi';
import {
  CommentLi,
  Wrapper,
  CommentUser,
  Comment,
} from './styles';

const CommentItem = ({ name, comment }) => (
  <CommentLi>
    <Wrapper width="45px" bgColor="#eee" align="center">
      <FiUser size="30" color="#4caf50" />
    </Wrapper>

    <Wrapper>
      <CommentUser>{name}</CommentUser>
      <Comment>{comment}</Comment>
    </Wrapper>
  </CommentLi>
);

CommentItem.propTypes = ({
  name: PropsTypes.string.isRequired,
  comment: PropsTypes.string.isRequired,
});

export default CommentItem;
