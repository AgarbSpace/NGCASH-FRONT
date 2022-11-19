import styled from 'styled-components';

export const Form = styled.form`
  width: 300px;
  height: 400px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 15px;

  border-radius: 25px;
  background-color: #FFFFFF;

  @media (max-height: 750px){
    width: 90%;
  }

  a{
    text-align: center;
    text-decoration: none;
    font-size: 15px;
    color: #999999;

    :hover{
      text-decoration: underline;
      color: #000000;
    }
  }
`;

export const Input = styled.input`
  width: 90%;
  height: 75px;

  display: flex;
  align-items: center;

  border: none;
  border-bottom: 4px solid #000000;
  border-radius: 25px;

  color: #000000;
  font-size: 25px;

  padding-left: 15px;
  

  ::placeholder {
    color: #000000;
    padding-left: 15px;
    font-size: 25px;
  }
`;

export const SubmitButton = styled.button`
  width: 70%;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  border: none;
  border-radius: 25px;
  background-color: #bfbfbf;

  font-size: 25px;
  font-weight: 700;
`;

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-bottom: 50px;
`;

export const IMG = styled.img`
  width: 220px;
  height: 110px;

  margin-bottom: 20px;
`;
