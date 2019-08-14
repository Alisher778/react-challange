import styled from 'styled-components';

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

export { Wrapper, NewsWrapper };
