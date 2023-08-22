import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import { NavLink } from 'react-router-dom';

interface UserPropsType {
  id: string;
}

const User = ({ id }: UserPropsType) => {
  return (
    <li>
      <NavLink to={`/messages/${id}`} activeClassName={style.active} className={style.user}>
        <UserPhoto />
        <span className={style.name}>Andrei</span>
      </NavLink>
    </li>
  );
};

export default User;
