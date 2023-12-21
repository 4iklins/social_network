import { connect } from 'react-redux';
import Profile from './Profile';
import { StateType } from '../../redux/store';
import { ProfilePageType, createPostAC, setProfileAC } from '../../redux/profile-reducer';
import React from 'react';
import axios from 'axios';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';

export type ProfileResponseType = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
};
class ProfileContainer extends React.Component<ProfilePropsType> {
  componentDidMount(): void {
    this.props.setAppStatus('loading');
    axios.get<ProfileResponseType>(`https://social-network.samuraijs.com/api/1.0/profile/${2}`).then(res => {
      this.props.setProfile(res.data);
      this.props.setAppStatus('succeeded');
    });
  }

  render() {
    return <>{this.props.profile && <Profile {...this.props} />}</>;
  }
}

export type ProfilePropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  createPost: (postText: string) => void;
  setProfile: (profile: ProfileResponseType) => void;
  setAppStatus: (status: RequestStatusType) => void;
};

const mapStateToProps = (state: StateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = {
  createPost: createPostAC,
  setProfile: setProfileAC,
  setAppStatus: setAppStatusAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfileContainer);
