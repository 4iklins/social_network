import React, { useEffect } from 'react';
import style from './App.module.css';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import HeaderContainer from './layout/Header/HeaderContainer';
import { autAPI } from './api/auth-api';
import { useDispatch } from 'react-redux';
import { authMeAC } from './redux/auth-regucer';

type AppProps = {};

function App({}: AppProps) {

  const dispatch = useDispatch();
  useEffect(() => {
    autAPI.me().then(res => {
      if (res.data.resultCode === 0) {
        dispatch(authMeAC(true));
      }
    });
  }, []);

  return (
    <div className={style.app}>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
