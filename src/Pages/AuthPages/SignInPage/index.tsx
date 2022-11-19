/* eslint-disable import/extensions */
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import {
  Container, Form, IMG, Input, SubmitButton,
} from '../styleds';
import logo from '../../../assets/ngcash-logo.png';
import useAuth from '../../../hooks/useAuth';
import useAlert from '../../../hooks/useAlert';
import api from '../../../services/api';

export interface FormData {
  username: string;
  password: string;
}

export default function SignInPage() {
  const [signInForm, setSignInForm] = useState<FormData>({
    username: '',
    password: '',
  });
  const { signIn } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setSignInForm({ ...signInForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setMessage(null);

    if (!signInForm.username || signInForm.username === ''
      || !signInForm.password || signInForm.password === '') {
      setMessage({ type: 'error', text: 'Todos os campos são obrigatórios!' });
      return;
    }

    const { username, password } = signInForm;

    try {
      const userData = await api.signIn({ username: username.toLowerCase(), password });
      signIn({ username, userId: userData.user.id, token: userData.token });
      navigate('/');
    } catch (error: Error | AxiosError | any) {
      if (error.response) {
        setMessage({
          type: 'error',
          text: error.response.data.message,
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
          <Input type='text' placeholder='usuário' name='username' value={signInForm.username} onChange={handleInputChange} />
          <Input type='password' placeholder='senha' name='password' value={signInForm.password} onChange={handleInputChange} />
          <SubmitButton type='submit' >Entrar</SubmitButton>
          <Link to='/signUp'>Ainda não tem uma conta?<br></br> Cadastre-se!</Link>
        </Form>
      </Container>
  );
}
