import styled from 'styled-components';

const Container = styled.div`
    margin-top: 80px;
`;

const Search = styled.input`
    display: block;
    width: ${(props) => props.width};
    height: 40px;
    font-size: 25px;
    padding: 3px 10px;
    margin: ${(props) => props.margin};
    border-radius: 4px;
    border: 1px solid #7e4ed6;
    outline: none;
    box-shadow: none;
`;

const Result = styled.div`
   width: 100%;
   margin: 30px;
   text-align: center;
   font-size: 26px;
`;

export { Search, Container, Result };
