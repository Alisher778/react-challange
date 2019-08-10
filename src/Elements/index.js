import styled from 'styled-components';

const Main = styled.main`
  margin: 0;
  padding: 0;
  font-family: 'Open-sans', sans-serif;
  width: 90%;
  margin: 0 auto;
  max-width: 1200px;
`

const List = styled.li`
  list-style-type: none;
`

const CardParent = styled.ul`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0;
`

const Card = styled.li`
    list-style: none;
    width: calc(20% - 14px);
    margin: 7px;
    background: #ffc107;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 4px;
    height: 100px;
    text-align: center;
    a {
      padding: 4px;
      display: block;
      color: #000;
      text-decoration: none;

      p {
        font-size: 10px;
        b{
          color: #3f51b5;
        }
      }
    }


    @media (max-width: 991px) {
      & {
        width: calc(25% - 14px);
      }
    }
    @media (max-width: 767px) {
      & {
        width: calc(33% - 14px);
      }
    }
    @media (max-width: 500px) {
      & {
        width: calc(50% - 14px);
      }
    }
    @media (max-width: 414px) {
      & {
        width: calc(100% - 14px);
      }
    }
`

const Loading = styled.div`
  @keyframes loading {
    from {transform: rotate(0deg)}
    to {transform: rotate(360deg)}
  }

  min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  div {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    border-width: 10px;
    border-style: solid;
    border-color: rgba(76, 175, 80, 0.41); 
    border-bottom-color: #4caf50;
    animation: loading 1s infinite linear forwards;
    margin-right: 10px;
  }
`

const ErrorCard = styled.div`
   min-height: calc(100vh - 70px);
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #E91E63;
`

const Search = styled.input`
    display: block;
    width: ${props => props.width};
    height: 40px;
    font-size: 25px;
    padding: 3px 10px;
    margin: ${props => props.margin};
    border-radius: 4px;
    border: 1px solid #7e4ed6;
    outline: none;
    box-shadow: none;
`
const Button = styled.button`
    height: 40px;
    width: ${props => props.width || '92px'};
    border-radius: 4px;
    font-size: ${props => props.fontSize || '20px'};
    background: #4CAF50;
    color: #fff;
    border: 1px solid;

`
const Dflex = styled.div`
   display: flex;
   align-items: center;
   justify-content: ${props => props.position};
`
export { Main, List, Card, CardParent, Loading, ErrorCard, Search, Dflex, Button };