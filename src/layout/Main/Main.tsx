import style from './main.module.css';
import Wrapper from '../../components/Wrapper/Wrapper';
import { Redirect, Route, Switch } from 'react-router-dom';
import MessagesContainer from '../../pages/Messages/MessagesContainer';
import ProfileConainer from '../../pages/Profile/ProfileConainer';
import UsersContainer from '../../pages/Users/UsersContainer';
import { useSelector } from 'react-redux';
import { StateType } from '../../redux/store';

const Main = () => {
  const isLoggined = useSelector<StateType, boolean>(state => state.auth.isLogined);
  const myId = useSelector<StateType, number>(state => state.auth.myAuthData.id);
  if (!isLoggined) {
    return <Redirect to={'/login'} />;
  }
  return (
    <main className={style.main}>
      <Wrapper>
        <Switch>
          <Route exact path={'/'} render={() => <Redirect to={`/profile/${myId}`} />} />
          <Route exact path={'/profile'} render={() => <Redirect to={`/profile/${myId}`} />} />
          <Route path={`/profile/:id`} render={() => <ProfileConainer />} />
          <Route path={`/messages/:id?`} render={() => <MessagesContainer />} />
          <Route exact path={'/users'} render={() => <UsersContainer />} />
          <Route path={'*'} render={() => <div>404</div>} />
        </Switch>
      </Wrapper>
    </main>
  );
};

export default Main;
