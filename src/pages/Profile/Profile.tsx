import Posts from './Posts/Posts';
import style from './profile.module.css';
import { ProfilePropsType } from './ProfileConainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, profile, createPost }: ProfilePropsType) => {
  const myId = '21869';
  return (
    <section className={style.profile}>
      {profile && <ProfileInfo {...profile} />}
      {profile && <Posts posts={posts} createPost={createPost} profile={profile} myId={myId} />}
    </section>
  );
};

export default Profile;
