/* eslint-disable import/extensions */

import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import {
  Container, Form, IMG, Input, SubmitButton,
} from '../styleds';
import logo from '../../../assets/ngcash-logo.png';
import useAlert from '../../../hooks/useAlert';
import { FormData } from '../SignInPage';
import api from '../../../services/api';

export default function SignUpPage() {
  const [signUpForm, setsignUpForm] = useState<FormData>({
    username: '',
    password: '',
  });
  const { setMessage } = useAlert();
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setsignUpForm({ ...signUpForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!signUpForm.username || signUpForm.username === ''
      || !signUpForm.password || signUpForm.password === '') {
      setMessage({ type: 'error', text: 'Todos os campos são obrigatórios!' });
      return;
    }

    try {
      const { username, password } = signUpForm;
      await api.signUp({ username: username.toLowerCase(), password });
      navigate('/signIn');
    } catch (error: Error | AxiosError | any) {
      if (error.response.data.message) {
        setMessage({
          type: 'error',
          text: error.response.data.message,
        });
        return;
      }
      if (error.responsee) {
        setMessage({
          type: 'error',
          text: error.response.message,
        });
        return;
      }

      setMessage({
        type: 'error',
        text: 'Erro, tente novamente em alguns segundos!',
      });
    }
  }

  return (
    <Container>
      <IMG src={logo} alt='logo'/>
      <Form onSubmit={handleSubmit}>
          <Input type='text' placeholder='usuário' name='username' value={signUpForm.username} onChange={handleInputChange} />
          <Input type='password' placeholder='senha' name='password' value={signUpForm.password} onChange={handleInputChange} />
        <SubmitButton type='submit' >Cadastrar</SubmitButton>
        <Link to='/signUp'>Já tem uma conta?<br></br> Entre!</Link>
      </Form>
    </Container>
  );
}
