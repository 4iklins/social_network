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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
