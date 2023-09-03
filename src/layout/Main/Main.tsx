import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import Profile from '../../pages/Profile/Profile';
import Messages from '../../pages/Messages/Messages';
import { Route } from 'react-router-dom';
import { IState } from '../../data/state';

const Main = ({ messagesPage, profilePage }: IState) => {
  return (
    <main className={style.main}>
      <Container>
        <Route path={`/profile`} render={() => <Profile {...profilePage} />} />
        <Route path={`/messages`} render={() => <Messages {...messagesPage} />} />
      </Container>
    </main>
  );
};

export default Main;
