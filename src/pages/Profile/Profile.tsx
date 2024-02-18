import Posts from './Posts/Posts';
import style from './profile.module.css';
import { ProfilePropsType } from './ProfileConainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = ({ posts, profile, status, myId, createPost, setProfileStatus }: ProfilePropsType) => {
  return (
    <section className={style.profile}>
      {profile && <ProfileInfo {...profile} status={status} setProfileStatus={setProfileStatus} myId={myId} />}
      {profile && <Posts posts={posts} createPost={createPost} profile={profile} myId={myId} />}
    </section>
  );
};

export default Profile;
