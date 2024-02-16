import { NavLink } from 'react-router-dom';
import Logo from '../../components/Logo/Logo';
import style from './header.module.css';
import Wrapper from '../../components/Wrapper/Wrapper';
import classNames from 'classnames';
import LiearProgress from '../../components/LinearProgress/LinearProgress';
import { HeaderPropsType } from './HeaderContainer';
import { match } from 'assert';

const headerMenu = ['profile', 'messages', 'users'];

const Header = (props: HeaderPropsType) => {
  return (
    <header className={style.header}>
      <Wrapper>
        <div className={style.flexWrapper}>
          <Logo />
          <nav>
            <ul className={style.menuList}>
              {headerMenu.map(menuItem => (
                <li key={menuItem} className={classNames(style.menuItem)}>
                  <NavLink
                    to={`/${menuItem === 'profile' ? `${menuItem}/${props.myData.id}` : menuItem}`}
                    isActive={(match, location) => {
                      return location.pathname.includes(menuItem) ? true : false;
                    }}
                    activeClassName={style.active}>
                    <span>{menuItem}</span>
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </Wrapper>
      {props.status === 'loading' && <LiearProgress className={style.progress} />}
    </header>
  );
};

export default Header;
