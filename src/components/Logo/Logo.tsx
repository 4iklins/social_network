import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

const Logo = () => {
  return (
    <NavLink to='#'>
      <Icon id='logo' color='#adf7b6' width='40' heigth='40' />
    </NavLink>
  );
};

export default Logo;
