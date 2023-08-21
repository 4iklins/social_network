import Icon from '../../../components/Icon/Icon';
import style from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={style.profilInfo}>
      <div>
        <div className={style.photoWrapper}>
          <Icon id='user' color='#181818' viewBox='0 0 200 200' width='60' heigth='60' />
        </div>
      </div>
      <div className={style.description}>
        <div className={style.name}>Andrei</div>
        <div className={style.status}>Status: bla bla </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
