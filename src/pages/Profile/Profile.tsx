import Posts from './Posts/Posts';
import style from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  return (
    <section className={style.profile}>
      <ProfileInfo />
      <Posts />
    </section>
  );
};

export default Profile;
