import React, { Component } from 'react';
import { connect } from 'react-redux';
import createComment from '../../../../store/actions/commentsActions';
import CommentForm from './CommentsForm';
import CommentItem from './CommentItem';


class Comments extends Component {
    state = {
        id: Date.now(),
        companyId: '',
        comments: []
    }

    componentDidMount() {
        return this.initialDataSorting();
    }

    initialDataSorting = () => {
        const { id } = this.props;

        const currentComments = this.props.comments.filter(item => item.companyId === id);
        if (currentComments.length > 0) {
            this.setState({ comments: currentComments, companyId: id });
        } else {
            this.setState({ companyId: id });
        }

    }

    componentDidUpdate(prevProps) {
        if (prevProps.comments !== this.props.comments) {
            return this.initialDataSorting();
        }
    }

    formHandler = (e, name, comment) => {
        e.preventDefault();

        this.props.createComment({
            id: Date.now(),
            name: name,
            comment: comment,
            companyId: this.state.companyId
        });
    }

    render() {
        return (
            <div>
                <h3>Comments</h3>
                <ul>
                    {
                        this.state.comments.map((item, index) => {
                            return <CommentItem key={item.id || index} name={item.name} comment={item.comment} />
                        })
                    }
                </ul>
                <p></p>
                <CommentForm createComment={this.formHandler} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        comments: state.comments.comments
    }
}

const mapDispachToProps = dispach => {
    return {
        createComment: (data) => dispach(createComment(data))
    }
}

export default connect(mapStateToProps, mapDispachToProps)(Comments);
