import { NavLink } from 'react-router-dom';
import style from './user.module.css';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import { UserType } from '../../../redux/users-reducer';
import Button from '../../../components/Button/Button';

const User = (user: UserType) => {
  return (
    <div className={style.user}>
      <NavLink to={`/profile/${user.id}`}>
        <UserPhoto avatar={user.photos.small} size='large' />
      </NavLink>
      <div className={style.userDesc}>
        <NavLink to={`/profile/${user.id}`} className={style.name}>
          {user.name}
        </NavLink>
        <span>Status:{user.status}</span>
      </div>
      <div className={style.followBtns}>
        {user.followed ? (
          <Button className={style.followBtn}>Unfollow</Button>
        ) : (
          <Button className={style.followBtn}>Follow</Button>
        )}
      </div>
    </div>
  );
};

export default User;
