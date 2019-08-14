import styled from 'styled-components';

const Container = styled.div`
    margin-top: 60px;
`;

const Wrapper = styled.div`
   text-align: ${(props) => props.align}
`;

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

`;

const Search = styled.input`
    display: block;
    width: ${(props) => props.width};
    height: 40px;
    font-size: 20px;
    padding: 3px 10px;
    margin: ${(props) => props.margin};
    border-radius: 4px;
    border: 1px solid #7e4ed6;
    outline: none;
    box-shadow: none;
`;

export {
  Container, Wrapper, NewsWrapper, Search,
};
