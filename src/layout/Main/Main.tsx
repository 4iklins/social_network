import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import { Redirect, Route, Switch } from 'react-router-dom';
import MessagesContainer from '../../pages/Messages/MessagesContainer';
import ProfileConainer from '../../pages/Profile/ProfileConainer';
import UsersContainer from '../../pages/Users/UsersContainer';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store';
import Login from '../../pages/Login/Login';

const Main = () => {
  const isLoggined = useSelector<StateType, boolean>(state => state.auth.isLogined);
  const myId = useSelector<StateType, number>(state => state.auth.myAuthData.id);
  return (
    <main className={style.main}>
      <Container>
        <Switch>
          {!isLoggined && <Route path={'*'} render={() => <Redirect to={'/login'} />} />}
          <Route exact path={'/'} render={() => <Redirect to={`/profile/${myId}`} />} />
          <Route exact path={'/profile'} render={() => <Redirect to={`/profile/${myId}`} />} />
          <Route path={`/profile/:id`} render={() => <ProfileConainer />} />
          <Route path={`/messages/:id?`} render={() => <MessagesContainer />} />
          <Route exact path={'/users'} render={() => <UsersContainer />} />
          <Route path={'/login'} render={() => <Login />} />
          <Route path={'*'} render={() => <div>404</div>} />
        </Switch>
      </Container>
    </main>
  );
};

export default Main;
