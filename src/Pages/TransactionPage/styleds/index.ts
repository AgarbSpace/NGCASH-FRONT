import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 70px;

  * {
    font-family: 'IBM Plex Sans', 'sans-serif';
  }

  @media (max-height: 750px){
    padding-top: 150px;
  }
`;

export const Box = styled.div`
  width: 300px;
  height: 550px;

  padding-bottom: 90px;

  @media (max-height: 750px){
    width: 90%;
  }

  form {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 15px;
  }

  input {
    width: 100%;
    height: 50px;

    display: flex;
    align-items: center;

    border: none;
    border-bottom: 4px solid #FFFFFF;
    border-radius: 25px;
    background-color: #000000;

    color: #FFFFFF;
    font-size: 20px;

    padding-left: 15px;

    ::placeholder {
        color: #FFFFFF;
        padding-left: 15px;
        font-size: 18px;
    }

  }

  button {
    width: 70%;
    height: 50px;

    display: flex;
    justify-content: center;
    align-items: center;

    border: none;
    border-radius: 25px;
    background-color: #FFFFFF;

    color: #000000;
    font-size: 20px;
    font-weight: 600;

    padding-left: 15px;
    margin-top: 20px;

    @media (max-height: 750px){
    width: 90%;
  }
  }

  a {
    display: flex;
    align-items: center;

    font-size: 25px;
    color: #FFFFFF;
    text-decoration: none;
  }
`;
