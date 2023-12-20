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

type UsersResponseType = {
  error: string | null;
  items: UserType[];
  totalCount: number;
};

class UsersContainer extends React.Component<UsersPropsType> {
  componentDidMount(): void {
    axios
      .get<UsersResponseType>(
        `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`
      )
      .then(res => {
        this.props.setUsers(res.data.items);
        this.props.setTotalCount(res.data.totalCount);
      });
  }
  componentDidUpdate(prevProps: Readonly<UsersPropsType>): void {

    if (this.props.currentPage !== prevProps.currentPage || this.props.itemsPerPage !== prevProps.itemsPerPage) {
      axios
        .get<UsersResponseType>(
          `https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.itemsPerPage}`
        )
        .then(res => {
          this.props.setUsers(res.data.items);
          this.props.setTotalCount(res.data.totalCount);
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
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
