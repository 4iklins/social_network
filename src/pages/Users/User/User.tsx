import { NavLink } from 'react-router-dom';
import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import Button from '../../../components/Button/Button';
import { UserType } from '../../../api/users-api';

const User = (user: UserType) => {
  const url = `/profile/${user.id}`;
  return (
    <li className={style.user}>
      <NavLink to={url}>
        <UserPhoto avatar={user.photos.small} size='large' />
      </NavLink>
      <div className={style.userDesc}>
        <NavLink to={url} className={style.name}>
          {user.name}
        </NavLink>
        <span>Status:{user.status}</span>
      </div>
      <div className={style.followBtns}>
        {user.followed ? (
          <Button color='secondary' size='small'>
            Unfollow
          </Button>
        ) : (
          <Button color='primary' size='small'>
            Follow
          </Button>
        )}
      </div>
    </li>
  );
};

export default User;
