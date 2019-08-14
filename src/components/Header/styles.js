import styled from 'styled-components';

const HeaderElement = styled.header`
    height: 60px;
    background: #081559;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: sticky;
    top: 0;
    z-index: 999;

    a {
        color: #fff;
        text-decoration: none;
    }
`;

const List = styled.li`
    list-style-type: none;
    margin: 0 20px;
    a {
        color: #8250db;
        text-decoration: none;

        &:hover {
            color: #fff;
        }
    }
    @media (max-width: 500px) {
        & {
            margin: 0 8px;
        }
    }
`;

const Ul = styled.ul`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: auto;
`;

const Nav = styled.nav`
  width: 90%;
  margin: 0 auto;
  display: flex;
    align-items: center;
    justify-content: center;
`;

export {
  HeaderElement, List, Ul, Nav,
};
