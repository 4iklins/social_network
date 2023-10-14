import { ProfilePageType } from '../../data/state';
import { PostType } from '../../redux/profile-reducer';
import { AppDispatch } from '../../redux/store';
import Posts from './Posts/Posts';
import style from './profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type ProfileProps = {
  posts: PostType[];
  newPostText: string;
  dispatch: AppDispatch;
};

const Profile = ({ posts, newPostText, dispatch }: ProfileProps) => {
  return (
    <section className={style.profile}>
      <ProfileInfo />
      <Posts posts={posts} dispatch={dispatch} />
    </section>
  );
};

export default Profile;
