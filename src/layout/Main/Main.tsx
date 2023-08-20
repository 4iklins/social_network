import style from './main.module.css';
import Container from '../../components/Wrapper/Wrapper';
import Profile from '../../pages/Profile/Profile';

const Main = () => {
  return (
    <main className={style.main}>
      <Container>
        <Profile />
      </Container>
    </main>
  );
};

export default Main;
