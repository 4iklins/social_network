import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import Profile from '../../pages/Profile/Profile';
import Messages from '../../pages/Messages/Messages';
import { Route } from 'react-router-dom';
import { MessagesPageType } from '../../redux/messages-reducer';
import { ProfilePageType } from '../../redux/profile-reducer';
import { AppDispatch } from '../../redux/store';

type AppProps = {
  messagesPage: MessagesPageType;
  profilePage: ProfilePageType;
  dispatch: AppDispatch;
};

const Main = ({ messagesPage, profilePage, dispatch }: AppProps) => {
  return (
    <main className={style.main}>
      <Container>
        <Route path={`/profile`} render={() => <Profile {...profilePage} dispatch={dispatch} />} />
        <Route path={`/messages`} render={() => <Messages {...messagesPage} />} />
      </Container>
    </main>
  );
};

export default Main;
