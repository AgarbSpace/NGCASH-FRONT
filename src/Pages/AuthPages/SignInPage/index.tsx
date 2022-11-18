import { Link } from 'react-router-dom';
import {
  Container, Form, IMG, Input, SubmitButton,
} from '../styleds';
import logo from '../../../assets/ngcash-logo.png';

export default function SignInPage() {
  return (
      <Container>
        <IMG src={logo} alt='logo'/>
        <Form>
          <Input placeholder='username'/>
          <Input placeholder='password'/>
          <SubmitButton>Entrar</SubmitButton>
          <Link to='/signUp'>Ainda não tem uma conta?<br></br> Cadastre-se!</Link>
        </Form>
      </Container>
  );
}
