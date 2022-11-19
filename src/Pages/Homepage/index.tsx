/* eslint-disable import/extensions */
/* eslint-disable no-param-reassign */
/* eslint-disable newline-per-chained-call */
/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable max-len */
import {
  AllInclusive,
  AttachMoney, MoneyOff,
} from '@mui/icons-material';
import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { InfinitySpin } from 'react-loader-spinner';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { AxiosError } from 'axios';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import pt from 'date-fns/locale/pt-BR';
import {
  BalanceBox, Box, Container, DetailsBox, FilterBox, FilterByDateBox, FilterIconsBox, NoMatches, Values, WelcomeSpan,
} from './styleds';
import useAuth from '../../hooks/useAuth';
import api from '../../services/api';
import useAlert from '../../hooks/useAlert';
import HeaderPages from '../../components/Header';

export default function Homepage() {
  const { user } = useAuth();
  const { setMessage } = useAlert();
  const navigate = useNavigate();
  const [transactionsData, setTransactions] = useState<any>([]);
  const [filteredTransactions, setfilteredTransactions] = useState<any>([]);
  const [date, setDate] = useState<any>(null);
  registerLocale('pt', pt);

  useEffect(() => {
    async function fetchTransactions() {
      if (!user) {
        navigate('/signIn');
        return;
      }

      try {
        const promise = await api.getTransactions(user.token);
        setTransactions(promise);
        setfilteredTransactions(promise);
      } catch (error: Error | AxiosError | any) {
        if (error.response) {
          setMessage({
            type: 'error',
            text: error.response.data,
          });
          // eslint-disable-next-line no-useless-return
          return;
        }
      }
    }
    fetchTransactions();
  }, [user, navigate, setMessage]);

  if (transactionsData.length === 0) {
    return (
    <Container>
      <div>
        <InfinitySpin color='#FFFFFF'/>
      </div>
    </Container>
    );
  }

  function handleDateChange(e: any) {
    const fullDate = new Date(e);
    const day = fullDate.getDate();
    const month = fullDate.getMonth() + 1;
    const year = fullDate.getFullYear();
    const selectedDate = `${day}/${month}/${year}`;
    setfilteredTransactions(transactionsData.filter((transaction: any) => {
      if (!transaction.balance) {
        return transaction.createdAt.slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/') === selectedDate;
      }
    }));
    setDate(e);
  }

  const userBalance = transactionsData.filter((transaction:any) => transaction.balance);
  return (
    <Container>
      <HeaderPages />
      <Box>
        <WelcomeSpan>
          Olá,
          <span> {user?.username} !</span>
        </WelcomeSpan>
        <BalanceBox>
          <span>Seu Saldo:</span>
          <span>R$: {userBalance[0].balance}</span>
        </BalanceBox>
        <DetailsBox>
          {filteredTransactions.length !== 0 ? filteredTransactions.map((transaction: any, index: number) => {
            if (!transaction.balance && transaction.creditedAccountId === user?.userId) {
              return <Values key={index} style={{ color: '#01ca30' }} >R$: +{transaction.value} dia: {transaction.createdAt.slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/')}</Values>;
            }
            if (!transaction.balance && transaction.debitedAccountId === user?.userId) {
              return <Values key={index} style={{ color: '#ea2300' }} >R$: -{transaction.value} dia: {transaction.createdAt.slice(0, 10).replace(/-/g, '/').split('/').reverse().join('/')}</Values>;
            }
          }) : <NoMatches>Nao há transações correspondentes com este filtro</NoMatches>}
        </DetailsBox>
        <FilterBox>
          <FilterIconsBox>
            <AttachMoney sx={{ fontSize: 40, color: 'white' }} onClick={() => setfilteredTransactions(transactionsData.filter((transactions: any) => transactions.creditedAccountId === user?.userId))} />
            <MoneyOff sx={{ fontSize: 40, color: 'white' }} onClick={() => setfilteredTransactions(transactionsData.filter((transactions: any) => transactions.debitedAccountId === user?.userId))}/>
            <AllInclusive sx={{ fontSize: 40, color: 'white' }} onClick={() => setfilteredTransactions(transactionsData)}/>
          </FilterIconsBox>
          <FilterByDateBox>
            <span>Filtrar por data: </span>
            <DatePicker selected={date} locale='pt' dateFormat='d/M/yyyy' maxDate={new Date()} onChange={handleDateChange}/>
          </FilterByDateBox>
          <Link to='/transaction'>Realizar Transferência</Link>
        </FilterBox>
      </Box>
    </Container>
  );
}
