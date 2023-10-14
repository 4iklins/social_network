import React from 'react';
import style from './App.module.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import { MessagesPageType } from './redux/messages-reducer';
import { ProfilePageType } from './redux/profile-reducer';
import { AppDispatch } from './redux/store';

type AppProps = {
  messagesPage: MessagesPageType;
  profilePage: ProfilePageType;
  dispatch: AppDispatch;
};

function App({ messagesPage, profilePage, dispatch }: AppProps) {
  return (
    <div className={style.app}>
      <Header />
      <Main messagesPage={messagesPage} profilePage={profilePage} dispatch={dispatch}/>
      <Footer />
    </div>
  );
}

export default App;
