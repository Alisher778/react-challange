import styled from 'styled-components';

const Wrapper = styled.div`
   width: ${(props) => props.width || '100%'};
   text-align: ${(props) => props.align || 'text-left'};
   padding: 7px;
   background: ${(props) => props.bgColor};
`;

const CommentLi = styled.li`
   display: flex;
   align-items: center;
   margin: 8px 0;
   padding-bottom: 8px;
   list-style: none;
   border-bottom: 1px dashed #bababa;
`;

const CommentUser = styled.h5`
    margin: 5px 0;
    text-transform: capitalize;
`;

const Comment = styled.p`
    margin: 5px 0;
    font-weight: 300;
`;

const FormController = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin: 7px 0;
`;

const InputField = styled.input`
   display: block;
   width: ${(props) => props.width || '100%'};
   height: 35px;
   border: 1px solid ${(props) => (props.empty ? 'red' : '#4caf50')};
   border-radius: 3px;
   font-size: 16px;
   padding: 3px 10px;
`;

const TextArea = styled.textarea`
   display: block;
   width: ${(props) => props.width || '100%'};
   height: 70px;
   border: 1px solid ${(props) => (props.empty ? 'red' : '#4caf50')};
   border-radius: 3px;
   font-size: 16px;
   padding: 3px 10px;
`;

const Button = styled.button`
    padding: 5px 10px;
    border: 1px solid '#FFC107';
    border-radius: 4px;
    background: #FFC107;
    font-size: 16px;
`;

export {
  CommentLi,
  Wrapper,
  CommentUser,
  Comment,
  FormController,
  InputField,
  TextArea,
  Button,
};
