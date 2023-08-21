import { NavLink } from 'react-router-dom';
import Icon from '../Icon/Icon';

const Logo = () => {
  return (
    <NavLink to='#'>
      <Icon id='logo' color='#adf7b6' />
    </NavLink>
  );
};

export default Logo;
