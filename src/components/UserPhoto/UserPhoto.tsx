import Icon from '../Icon/Icon';
import style from './userPhoto.module.css';

const UserPhoto = ({ avatar }: { avatar: string }) => {
  return (
    <div className={style.userPhoto}>
      {avatar ? <img src={avatar} /> : <Icon id='user' color='#181818' width='24' heigth='24' />}
    </div>
  );
};

export default UserPhoto;
