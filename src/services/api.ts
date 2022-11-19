/* eslint-disable @typescript-eslint/no-unused-vars */
import axios, { AxiosError } from 'axios';

interface UserData {
  username: string;
  password: string;
}

const URL = process.env.REACT_APP_URL || 'http://localhost:5000';
const instance = axios.create({
  baseURL: URL,
});

function getConfig(token: string) {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
}

async function signUp(signUpData: UserData) {
  await instance.post('/signUp', signUpData);
}

async function signIn(signInData: UserData) {
  const promise = await instance.post('/signIn', signInData);
  return promise.data;
}

async function getTransactions(token: string) {
  const config = getConfig(token);
  const promise = await instance.get('/transactions', config);
  return promise.data;
}

async function postTransaction(username: string, value: number, token: string) {
  const config = getConfig(token);
  const promise = await instance.post('/transactions', { username, value }, config);
  return promise.data;
}

class Api {
  public signUp;

  public signIn;

  public getTransactions;

  public postTransaction;

  constructor() {
    this.signUp = signUp;
    this.signIn = signIn;
    this.getTransactions = getTransactions;
    this.postTransaction = postTransaction;
  }
}

const api = new Api();

export default api;
