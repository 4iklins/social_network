import { connect } from 'react-redux';
import Profile from './Profile';
import { StateType } from '../../redux/store';
import {  createPostAC, getProfileTC, setProfileStatusTC } from '../../redux/profile-reducer';
import React from 'react';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

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
type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType;
export type ProfilePropsType = RouteComponentProps<PathParamsType> & OwnPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    myId: state.auth.myAuthData.id,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    createPost: (postText: string) => dispatch(createPostAC(postText)),
    setAppStatus: (status: RequestStatusType) => dispatch(setAppStatusAC(status)),
    getProfile: (userId: string) => dispatch(getProfileTC(userId)),
    setProfileStatus: (status: string) => dispatch(setProfileStatusTC(status)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ProfileContainer));
