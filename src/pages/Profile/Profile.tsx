import { ProfilePageType } from '../../data/state';
import Posts from './Posts/Posts';
import style from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, newPostText }: ProfilePageType) => {
  return (
    <section className={style.profile}>
      <ProfileInfo />
      <Posts posts={posts} />
    </section>
  );
};

export default Profile;
