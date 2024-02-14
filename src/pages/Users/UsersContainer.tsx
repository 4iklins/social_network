import { connect } from 'react-redux';
import Users from './Users';
import { StateType } from '../../redux/store';
import {
  ItemsPerPageType,
  followUserAC,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  setUsersPerPAgeAC,
  unfollowUserAC,
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';
import { UserType, UsersResponseType, usersAPI } from '../../api/users-api';

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.setAppStatus('loading');
    usersAPI.getUsers(`?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`).then(res => {
      this.props.setUsers(res.data.items);
      this.props.setTotalCount(res.data.totalCount);
      this.props.setAppStatus('succeeded');
    });
  }
  componentDidUpdate(prevProps: Readonly<UsersPropsType>): void {
    if (this.props.currentPage !== prevProps.currentPage || this.props.itemsPerPage !== prevProps.itemsPerPage) {
      this.props.setAppStatus('loading');
      usersAPI.getUsers(`?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`).then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
        this.props.setAppStatus('succeeded');
      });
    }
  }
  render() {
    return <Users {...this.props} />;
  }
}

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
  setTotalCount: (count: number) => void;
  setCurrentPage: (page: number) => void;
  setUsersPerPage: (count: ItemsPerPageType) => void;
  setAppStatus: (status: RequestStatusType) => void;
  follow: (userId: number) => void;
  unfollow: (userId: number) => void;
};

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
    totalCount: state.usersPage.totalCount,
    currentPage: state.usersPage.currentPage,
    itemsPerPage: state.usersPage.itemsPerPage,
  };
};

const mapDispatchToProps: mapDispatchToPropsType = {
  setUsers: setUsersAC,
  setTotalCount: setTotalCountAC,
  setCurrentPage: setCurrentPageAC,
  setUsersPerPage: setUsersPerPAgeAC,
  setAppStatus: setAppStatusAC,
  follow: followUserAC,
  unfollow: unfollowUserAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
