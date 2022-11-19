import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  * {
    font-family: 'IBM Plex Sans', 'sans-serif';
  }

  @media (max-height: 750px){
    padding-top: 90px;
    padding-bottom: 80px;
  }
`;

export const Box = styled.div`
  width: 300px;
  height: 550px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 15px;

  @media (max-height: 750px){
    width: 90%;
  }
`;

export const BalanceBox = styled.div`
  width: 100%;
  height: 50px;

  display: flex;
  flex-direction: column;

  background-color: #000000;

  & span:first-child {
    color: #FFFFFF;
    font-size: 20px;
    margin-bottom: 5px;
  }
  
  & span:nth-child(2) {
    color: #FF00FF;
    font-size: 25px;
    padding-left: 15px;
  }
`;

export const DetailsBox = styled.div`
  width: 100%;
  height: 325px;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  padding-left: 25px;
  padding-top: 20px;
  padding-bottom: 10px;

  overflow-y: scroll;

  background-color: #FFFFFF;
  border-radius: 25px;

  @media (max-height: 750px){
    height: 230px;
  }
`;

export const WelcomeSpan = styled.span`
  margin-bottom: 40px;
  font-size: 30px;
  color: #FFFFFF;

  span {
    font-weight: 500;
  }

  @media (max-height: 750px){
    margin-bottom: 15px;
  }

`;

export const FilterBox = styled.div`
  width: 100%;
  height: 60px;

  display: flex;
  flex-direction: column;
  gap: 20px;

  a {
    display: flex;
    justify-content: center;
    color: #FFFFFF;
    font-size: 20px;
    text-decoration: none;
    font-weight: 600;
    margin-top: 20px;
  }
`;

export const Values = styled.span`
  font-size: 17px;
  font-weight: 500;
`;

export const FilterIconsBox = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const FilterByDateBox = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;

  span {
    color: #FFFFFF;
    font-size: 15px;
    font-weight: 500;
  }

  input{
    width: 220px;
    height: 30px;

    border-radius: 25px;

    padding-left: 15px;

    font-size: 15px;
    font-weight: 600;
  }
`;

export const NoMatches = styled.span`
  font-weight: 600;
  font-size: 25px;
`;
