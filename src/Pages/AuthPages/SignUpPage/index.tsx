/* eslint-disable import/extensions */

import { Link } from 'react-router-dom';
import {
  Container, Form, IMG, Input, SubmitButton,
} from '../styleds';
import logo from '../../../assets/ngcash-logo.png';

export default function SignUpPage() {
  return (
    <Container>
      <IMG src={logo} alt='logo'/>
      <Form>
        <Input placeholder='username'/>
        <Input placeholder='password'/>
        <SubmitButton>Cadastrar</SubmitButton>
        <Link to='/signUp'>Já tem uma conta?<br></br> Entre!</Link>
      </Form>
    </Container>
  );
}
