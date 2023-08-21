import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import Profile from '../../pages/Profile/Profile';
import Messages from '../../pages/Messages/Messages';

const Main = () => {
  return (
    <main className={style.main}>
      <Container>
        {/* <Profile /> */}
        <Messages />
      </Container>
    </main>
  );
};

export default Main;
