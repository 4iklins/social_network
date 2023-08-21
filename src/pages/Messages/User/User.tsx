import style from './user.module.css';
import Icon from '../../../components/Icon/Icon';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';

const User = () => {
  return (
    <li className={style.user}>
      <UserPhoto />
      <span className={style.name}>Andrei</span>
    </li>
  );
};

export default User;
