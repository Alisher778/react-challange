import styled from 'styled-components';

const Error = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: calc(100vh - 70px);
    text-align: center;
    font-size: 32px;
    color: #e91e63;
`;

const Title = styled.h2`
   margin: 10px;
   font-size: 90px;
`;

export { Error, Title };
