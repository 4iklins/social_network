import { NavLink } from 'react-router-dom';
import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import Button from '../../../components/Button/Button';
import { usersAPI } from '../../../api/users-api';
import { ResultCode } from '../../../api/instance';
import { UserDomainType } from '../../../redux/users-reducer';

type UserProps = UserDomainType & {
  followToggle: (userId: number, follow: boolean) => void;
  setFollowingInProgress: (userId: number, inProgress: boolean) => void;
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
          <Button
            color='secondary'
            size='small'
            onClick={() => {
              user.followToggle(user.id, false);
            }}
            disabled={user.followingProgress}>
            Unfollow
          </Button>
        ) : (
          <Button
            color='primary'
            size='small'
            onClick={() => {
              user.followToggle(user.id, true);
            }}
            disabled={user.followingProgress}>
            Follow
          </Button>
        )}
      </div>
    </li>
  );
};

export default User;
