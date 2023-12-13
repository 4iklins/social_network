import { connect } from 'react-redux';
import Profile from './Profile';
import { StateType } from '../../redux/store';
import { ProfilePageType, createPostAC } from '../../redux/profile-reducer';

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  createPost: (postText: string) => void;
};

const mapStateToProps = (state: StateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

const mapDispatchToProps = {
  createPost: createPostAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
