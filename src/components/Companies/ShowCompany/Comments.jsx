import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createComment } from '../../../store/actions/commentsActions';
import { Comment, InputField } from './Elements';
import { Dflex } from '../../../Elements';
import { FiUser } from 'react-icons/fi';


class Comments extends Component {
    state = {
        id: Date.now(),
        companyId: '',
        name: '',
        comment: '',
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

    inputHandler = (e) => {
        e.preventDefault();
        const { name, value } = e.target;

        this.setState({ [name]: value });
    }

    formHandler = (e) => {
        e.preventDefault();
        const { name, comment, companyId } = this.state;
        if (name && comment) {
            this.props.createComment({
                id: Date.now(),
                name: name,
                comment: comment,
                companyId: companyId
            });
            // Reset State and 
            this.setState({ name: '', comment: '' });

        } else {
            const errorColor = "border: 1px solid red";
            const successColor = "border: 1px solid green";
            if (!name && !comment) {
                this.commentRef.style = errorColor;
                this.nameRef.style = errorColor;
            } else if (!name) {
                this.nameRef.style = errorColor;
                this.commentRef.style = successColor;
            } else {
                this.commentRef.style = errorColor;
                this.nameRef.style = successColor;
            }
        }

    }

    render() {
        console.log(this.state);

        return (
            <div>
                <h3>Comments</h3>
                <ul>
                    {
                        this.state.comments.map((item, index) => {
                            return (
                                <Comment>
                                    <Dflex key={item.id || index}>
                                        <FiUser size="30" />
                                        <Comment>
                                            <h5>{item.name}</h5>
                                            <p>{item.comment}</p>
                                        </Comment>

                                    </Dflex>
                                </Comment>
                            )
                        })
                    }
                </ul>

                <form onSubmit={this.formHandler}>
                    <InputField>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            name="name"
                            onChange={this.inputHandler}
                            value={this.state.name}
                            ref={ref => this.nameRef = ref}
                        />
                    </InputField>
                    <InputField>
                        <label htmlFor="name">Comment</label>
                        <textarea
                            name="comment"
                            rows="10"
                            onChange={this.inputHandler}
                            ref={ref => this.commentRef = ref}
                            value={this.state.comment}
                        ></textarea>
                    </InputField>
                    <InputField>
                        <button>Create Comment</button>
                    </InputField>
                </form>
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