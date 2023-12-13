import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import { Route } from 'react-router-dom';
import MessagesContainer from '../../pages/Messages/MessagesContainer';
import ProfileConainer from '../../pages/Profile/ProfileConainer';
import UsersContainer from '../../pages/Users/UsersContainer';

const Main = () => {
  return (
    <main className={style.main}>
      <Container>
        <Route path={`/profile`} render={() => <ProfileConainer />} />
        <Route path={`/messages`} render={() => <MessagesContainer />} />
        <Route path={'/users'} render={() => <UsersContainer />} />
      </Container>
    </main>
  );
};

export default Main;
