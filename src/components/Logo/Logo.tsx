import { NavLink } from 'react-router-dom';
import logo from '../../assets/img/logo.svg';
import style from './logo.module.css';

const Logo = () => {
  return (
    <NavLink to='#'>
      <svg className={style.img} width='50' height='50' viewBox='0 0 50 50' xmlns='http://www.w3.org/2000/svg' fill=''>
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M18.3125 42.0645L27.2623 6.6875L31.4375 7.87241L22.4878 43.3125L18.3125 42.0645Z'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M13.5025 12.6875L16.5625 15.9278L7.99501 25.0001L16.5625 34.0721L13.5025 37.3125L1.875 25.0001L13.5025 12.6875Z'
        />
        <path
          fillRule='evenodd'
          clipRule='evenodd'
          d='M36.4976 12.6875L33.4375 15.9278L42.0051 25.0001L33.4375 34.0721L36.4976 37.3125L48.125 25.0001L36.4976 12.6875Z'
        />
      </svg>
    </NavLink>
  );
};

export default Logo;
