import React, { useEffect } from 'react';
import style from './App.module.css';
import Main from './layout/Main/Main';
import Footer from './layout/Footer/Footer';
import HeaderContainer from './layout/Header/HeaderContainer';
import { useDispatch, useSelector } from 'react-redux';
import { setInitializedTC } from './redux/app-reducer';
import { StateType } from './redux/store';
import LiearProgress from './components/LinearProgress/LinearProgress';
import Login from './pages/Login/Login';
import { Route, Switch } from 'react-router-dom';

type AppProps = {};

function App({}: AppProps) {
  const isInitialized = useSelector<StateType, boolean>(state => state.app.initialized);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setInitializedTC());
  }, []);

  return isInitialized ? (
    <div className={style.app}>
      <HeaderContainer />

        <Route path={'/'} render={() => <Main />} />
        <Route path={'/login'} render={() => <Login />} />
      <Footer />
    </div>
  ) : (
    <LiearProgress />
  );
}

export default App;
