import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import Profile from '../../pages/Profile/Profile';
import Messages from '../../pages/Messages/Messages';
import { Route } from 'react-router-dom';

const Main = () => {
  return (
    <main className={style.main}>
      <Container>
        <Route path={`/profile`} render={() => <Profile />} />
        <Route path={`/messages`} render={() => <Messages />} />
      </Container>
    </main>
  );
};

export default Main;
