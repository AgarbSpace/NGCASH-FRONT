/* eslint-disable import/extensions */
import { ArrowBackIos } from '@mui/icons-material';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import HeaderPages from '../../components/Header';
import useAlert from '../../hooks/useAlert';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import { Box, Container } from './styleds';

export interface FormData {
  username: string;
  value: string;
}

export default function TransactionPage() {
  const { user } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [transactionForm, setTransactionForm] = useState<FormData>({
    username: '',
    value: '',
  });

  useEffect(() => {
    if (!user) {
      navigate('/signIn');
      // eslint-disable-next-line no-useless-return
      return;
    }
  }, [user, navigate]);

  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setTransactionForm({ ...transactionForm, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      if (!user) {
        navigate('/signIn');
        return;
      }
      await api.postTransaction(
        transactionForm.username,
        Number(transactionForm.value),
        user.token,
      );

      navigate('/');
    } catch (error: Error | AxiosError | any) {
      if (error.response) {
        setMessage({
          type: 'error',
          text: error.response.data,
        });
        if (error.response.data.message) {
          setMessage({
            type: 'error',
            text: error.response.data.message,
          });
        }
        // eslint-disable-next-line no-useless-return
        return;
      }
    }
  }

  return (
    <Container>
      <HeaderPages />
      <Box>
        <form onSubmit={handleSubmit}>
          <input placeholder='Username do destinatário' name='username' value={transactionForm.username} onChange={handleInputChange} />
          <input placeholder='Valor da transação' name='value' value={transactionForm.value} onChange={handleInputChange} />
          <button type='submit'>Enviar Transação</button>
          <Link to='/'><ArrowBackIos sx={{ fontSize: 40, color: 'white' }} /> Voltar</Link>
        </form>
      </Box>
    </Container>
  );
}
