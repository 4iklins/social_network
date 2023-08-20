import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import style from './header.module.css';
import Container from '../../components/Wrapper/Wrapper';
import classNames from 'classnames';

const headerMenu = ['profile', 'messages', 'users'];

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.flexWrapper}>
          <Logo />
          <nav>
            <ul className={style.menuList}>
              {headerMenu.map(menuItem => (
                <li key={menuItem} className={classNames(style.menuItem)}>
                  <NavLink to={`/${menuItem}`} activeClassName={style.active}>
                    <span>{menuItem}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
};

export default Header;