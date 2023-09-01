import React from 'react';
import style from './App.module.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { IState } from './data/state';

function App({ messagesPage, profilePage }: IState) {
  return (
    <div className={style.app}>
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
