import style from './mokuser.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import { NavLink } from 'react-router-dom';
import { MokUserType } from '../../../redux/messages-reducer';

const MokUser = ({ id, name, avatar }: MokUserType) => {
  return (
    <li>
      <NavLink to={`/messages/${id}`} activeClassName={style.active} className={style.user}>
        <UserPhoto avatar={avatar} size='small' />
        <span className={style.name}>{name}</span>
      </NavLink>
    </li>
  );
};

export default MokUser;
