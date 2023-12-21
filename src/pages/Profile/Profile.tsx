import Posts from './Posts/Posts';
import style from './profile.module.css';
import { ProfilePropsType } from './ProfileConainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, profile, createPost }: ProfilePropsType) => {
  return (
    <section className={style.profile}>
      {profile && <ProfileInfo {...profile} />}
      <Posts posts={posts} createPost={createPost} />
    </section>
  );
};

export default Profile;
