import { ProfileResponseType } from '../../../api/profile-api';
import Status from '../../../components/Status/Status';
import UserPhoto from '../../../components/UserPhoto/UserPhoto';
import style from './profileInfo.module.css';

type ProfileInfoPropsType = ProfileResponseType & statusPropsType;
type statusPropsType = {
  myId: number;
  status: string;
  setProfileStatus: (status: string) => void;
};

const ProfileInfo = (profile: ProfileInfoPropsType) => {
  return (
    <div className={style.profilInfo}>
      <div>
        <div className={style.photoWrapper}>
          <UserPhoto avatar={profile.photos.large} size='large' />
        </div>
      </div>
      <div className={style.description}>
        <div className={style.name}>{profile.fullName}</div>
        {profile.userId === profile.myId ? (
          <Status status={profile.status} setProfileStatus={profile.setProfileStatus} className={style.status} />
        ) : (
          <div>{profile.status}</div>
        )}
      </div>
    </div>
  );
};

export default ProfileInfo;
