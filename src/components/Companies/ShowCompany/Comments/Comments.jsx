import React, { useCallback } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import createComment from '../../../../store/actions/commentsActions';
import CommentForm from './CommentsForm';
import CommentItem from './CommentItem';


const Comments = ({ id, ...props }) => {
  const formHandler = useCallback((e, name, comment) => {
    e.preventDefault();

    props.createComment({
      id: Date.now(),
      name,
      comment,
      companyId: id,
    });
  }, [id, props]);

  const { comments } = props;
  const data = comments.filter((item) => item.companyId === id);


  return (
    <div>
      <h3>Comments</h3>
      <ul>
        {
          data.map((item, index) => (
            <CommentItem key={item.id || index} name={item.name} comment={item.comment} />
          ))
        }
      </ul>
      <p />
      <CommentForm createComment={formHandler} />
    </div>
  );
};

Comments.propTypes = ({
  id: PropTypes.string.isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    comment: PropTypes.string,
    companyId: PropTypes.String,
  })).isRequired,
  createComment: PropTypes.func.isRequired,
});

const mapStateToProps = (state) => ({
  comments: state.comments.comments,
});

const mapDispachToProps = (dispach) => (
  bindActionCreators({ createComment }, dispach)
);

export default connect(mapStateToProps, mapDispachToProps)(Comments);
