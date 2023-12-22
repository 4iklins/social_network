
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import { ProfileResponseType } from '../ProfileConainer';
import style from './profileInfo.module.css';

const ProfileInfo = (profile: ProfileResponseType) => {
  return (
    <div className={style.profilInfo}>
      <div>
        <div className={style.photoWrapper}>
          <UserPhoto avatar={profile.photos.large} size='large' />
        </div>
      </div>
      <div className={style.description}>
        <div className={style.name}>{profile.fullName}</div>
        <div className={style.status}>Status: bla bla </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
