import { NavLink } from 'react-router-dom';
import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import Button from '../../../components/Button/Button';
import { UserType } from '../../../api/users-api';

type UserProps = UserType & {
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};
const User = (user: UserProps) => {
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
          <Button color='secondary' size='small' onClick={() => user.unfollow(user.id)}>
            Unfollow
          </Button>
        ) : (
          <Button color='primary' size='small' onClick={() => user.follow(user.id)}>
            Follow
          </Button>
        )}
      </div>
    </li>
  );
};

export default User;
