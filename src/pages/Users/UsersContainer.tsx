import { connect } from 'react-redux';
import Users from './Users';
import { StateType } from '../../redux/store';
import {
  UserType,
  itemsPerPageType,
  setCurrentPageAC,
  setTotalCountAC,
  setUsersAC,
  setUsersPerPAgeAC,
} from '../../redux/users-reducer';
import React from 'react';
import axios from 'axios';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';

type UsersResponseType = {
  error: string | null;
  items: UserType[];
  totalCount: number;
};

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    this.props.setAppStatus('loading');
    axios
      .get<UsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
        this.props.setAppStatus('succeeded');
      });
  }
  componentDidUpdate(prevProps: Readonly<UsersPropsType>): void {
    if (this.props.currentPage !== prevProps.currentPage || this.props.itemsPerPage !== prevProps.itemsPerPage) {
      this.props.setAppStatus('loading');
      axios
        .get<UsersResponseType>(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`
        )
        .then(res => {
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
  setUsersPerPage: (count: itemsPerPageType) => void;
  setAppStatus: (status: RequestStatusType) => void;
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
