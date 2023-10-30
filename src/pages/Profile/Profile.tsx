import { ProfilePageType } from '../../redux/profile-reducer';
import Posts from './Posts/Posts';
import style from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

interface ProfilePropsType extends ProfilePageType {
  createPost: (postText: string) => void;
}

const Profile = ({ posts, createPost }: ProfilePropsType) => {
  return (
    <section className={style.profile}>
      <ProfileInfo />
      <Posts posts={posts} createPost={createPost} />
    </section>
  );
};

export default Profile;
