import Container from '../../components/Wrapper/Wrapper';
import style from './footer.module.css';

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <span>© 2023 Andrei Bortnik, All Rights Reserved.</span>
      </Container>
    </footer>
  );
};

export default Footer;
