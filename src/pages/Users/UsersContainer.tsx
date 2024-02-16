import { connect } from 'react-redux';
import Users from './Users';
import { StateType } from '../../redux/store';
import {
  ItemsPerPageType,
  followToggleTC,
  getUsersTC,
  searchUserAC,
  setCurrentPageAC,
  setFollowingInProgressAC,
  setTotalCountAC,
  setUsersPerPAgeAC,
} from '../../redux/users-reducer';
import React from 'react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.getUsers(`?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`);
  }
  componentDidUpdate(prevProps: Readonly<UsersPropsType>): void {
    if (this.props.currentPage !== prevProps.currentPage || this.props.itemsPerPage !== prevProps.itemsPerPage) {
      let url = `?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`;
      if (this.props.searchUser) {
        url = `${url}&term=${this.props.searchUser}`;
      }
      this.props.getUsers(url);
    }
  }
  componentWillUnmount(): void {
    this.props.setSearchUser('');
  }
  render() {
    return <Users {...this.props} />;
  }
}

export type OwnPropsType = mapStateToPropsType & mapDispatchToPropsType;
export type UsersPropsType = RouteComponentProps & OwnPropsType;

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    itemsPerPage: state.usersPage.itemsPerPage,
    searchUser: state.usersPage.searchUser,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    getUsers: (url: string) => dispatch(getUsersTC(url)),
    setTotalCount: (count: number) => dispatch(setTotalCountAC(count)),
    setCurrentPage: (page: number) => dispatch(setCurrentPageAC(page)),
    setUsersPerPage: (count: ItemsPerPageType) => dispatch(setUsersPerPAgeAC(count)),
    followToggle: (userId: number, follow: boolean) => dispatch(followToggleTC(userId, follow)),
    setSearchUser: (search: string) => dispatch(searchUserAC(search)),
    setFollowingInProgress: (userId: number, inProgress: boolean) =>
      dispatch(setFollowingInProgressAC(userId, inProgress)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UsersContainer));
