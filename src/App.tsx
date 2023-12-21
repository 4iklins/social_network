import React from 'react';
import style from './App.module.css';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import HeaderContainer from './layout/Header/HeaderContainer';

type AppProps = {};

function App({}: AppProps) {
  return (
    <div className={style.app}>
      <HeaderContainer />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
