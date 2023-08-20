import style from './profileInfo.module.css';

const ProfileInfo = () => {
  return (
    <div className={style.profilInfo}>
      <div>
        <div className={style.photoWrapper}>
          <div className={style.photo}></div>
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
