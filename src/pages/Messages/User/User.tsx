import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../data/state';

const User = ({ id, name, avatar }: UserType) => {
  return (
    <li>
      <NavLink to={`/messages/${id}`} activeClassName={style.active} className={style.user}>
        <UserPhoto avatar={avatar} size='small' />
        <span className={style.name}>{name}</span>
      </NavLink>
    </li>
  );
};

export default User;
