import React, { useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import {
  InputField,
  FormController,
  TextArea,
  Button,
} from './styles';

const CommentForm = ({ createComment }) => {
  const [name, setName] = useState('');
  const [comment, setComment] = useState('');
  const [emptyName, setEmptyName] = useState(false);
  const [emptyComment, setEmptyComment] = useState(false);

  const formHandler = useCallback((e) => {
    e.preventDefault();
    if (name && comment) {
      setEmptyName(false);
      setEmptyComment(false);

      createComment(e, name, comment);
    } else {
      setEmptyComment(!comment);
      setEmptyName(!name);
    }
  }, [comment, name, createComment]);

  return (
    <form onSubmit={formHandler}>
      <FormController>
        <InputField
          type="text"
          name="name"
          onChange={(e) => setName(e.target.value)}
          empty={emptyName}
        />
      </FormController>
      <FormController>
        <TextArea
          name="comment"
          rows="10"
          empty={emptyComment}
          onChange={(e) => setComment(e.target.value)}
        />
      </FormController>
      <FormController>
        <Button>Create Comment</Button>
      </FormController>
    </form>
  );
};

CommentForm.propTypes = ({
  createComment: PropTypes.func.isRequired,
});

export default CommentForm;
