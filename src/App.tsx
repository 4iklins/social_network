import React from 'react';
import style from './App.module.css';
import Header from './layout/Header/Header';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';


type AppProps = {

};

function App({}: AppProps) {
  return (
    <div className={style.app}>
      <Header />
      <Main/>
      <Footer />
    </div>
  );
}

export default App;
