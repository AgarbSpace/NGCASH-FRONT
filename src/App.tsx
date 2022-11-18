/* eslint-disable import/extensions */
import React from 'react';
import {
  BrowserRouter, Route, Routes,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import GlobalStyled from './GlobalStyled';
import SignInPage from './Pages/AuthPages/SignInPage';
import SignUpPage from './Pages/AuthPages/SignUpPage';

import { AuthProvider } from './provider/auth';

export default function App() {
  return <>
    <GlobalStyled />
    <ToastContainer />
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/signIn'element={ <SignInPage />}/>
          <Route path='/signUp' element={ <SignUpPage/> }/>
          <Route path='*'/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  </>;
}
