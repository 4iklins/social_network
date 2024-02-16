import { connect } from 'react-redux';
import Profile from './Profile';
import { StateType } from '../../redux/store';
import { ProfilePageType, createPostAC, getProfileTC } from '../../redux/profile-reducer';
import React from 'react';
import axios from 'axios';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
    let id = this.props.match.params.id;
    this.props.getProfile(id);
  }
  componentDidUpdate(prevProps: Readonly<ProfilePropsType>, prevState: Readonly<{}>, snapshot?: any): void {
    let id = this.props.match.params.id;
    if (prevProps.match.params.id !== id) {
      this.props.getProfile(id);
    }
  }

  render() {
    return <>{this.props.profile && <Profile {...this.props} />}</>;
  }
}

type PathParamsType = {
  id: string;
};
type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType;
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

const mapStateToProps = (state: StateType): ProfilePageType => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    createPost: (postText: string) => dispatch(createPostAC(postText)),
    setAppStatus: (status: RequestStatusType) => dispatch(setAppStatusAC(status)),
    getProfile: (userId: string) => dispatch(getProfileTC(userId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
