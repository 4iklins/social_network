import { connect } from 'react-redux';
import Profile from './Profile';
import { StateType } from '../../redux/store';
import { ProfilePageType, createPostAC } from '../../redux/profile-reducer';

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
