/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Alert from './components/Alert';
import GlobalStyled from './GlobalStyled';
import SignInPage from './Pages/AuthPages/SignInPage';
import SignUpPage from './Pages/AuthPages/SignUpPage';
import Homepage from './Pages/Homepage';
import TransactionPage from './Pages/TransactionPage';
import { AlertProvider } from './provider/alertContext';

import { AuthProvider } from './provider/auth';

export default function App() {
  return <>
    <GlobalStyled />
    <ToastContainer />
    <AlertProvider>
      <AuthProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/signIn'element={ <SignInPage />}/>
            <Route path='/signUp' element={ <SignUpPage /> }/>
            <Route path='/' element={<Homepage />} />
            <Route path='/transaction' element={<TransactionPage />}/>
          </Routes>
        </BrowserRouter>
        <Alert />
      </AuthProvider>
    </AlertProvider>
  </>;
}
