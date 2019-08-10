import styled from 'styled-components';

const Wrapper = styled.div`
   text-align: ${props => props.align}
`
const InputField = styled.div`
   display: flex;
   align-items: flex-start;
   flex-direction: column;
   margin: 20px 0;
   input{
      width: 90%;
      max-width: 400px;
      height: 35px;
      font-size: 16px;
      border: 1px solid;
      border-radius: 5px;
   }
   label {
      width: 100px;
      margin-bottom: 7px;
   }
   textarea{
      font-size: 16px;
      border: 1px solid;
      border-radius: 5px;
      width: 90%;
      max-width: 400px;
   }

   button{
      background: #FFC107;
    border-radius: 4px;
    border: 1px solid #FFC107;
    font-size: 16px;
    padding: 5px 10px;
   }
`


const Comment = styled.div`

   margin-left: 10px;
   h5 {
      margin: 5px 0;
   }
   p {
      margin: 5px 0;
   }

   li{
      list-style-type: none;
   }
`

const NewsWrapper = styled.div`
   a {
      text-decoration: none;
      color: #000;

      div{
         font-size: 12px;
      }
   }
   ul {
      padding: 0;
   }
   li {
      list-style: none;
      background: #ebebeb;
      padding: 7px 22px;
      border-radius: 4px;
      margin: 5px 0;
   }
   h5, p {
      margin: 5px 0;
      font-size: 14px;
   }

`

export { Wrapper, InputField, Comment, NewsWrapper };