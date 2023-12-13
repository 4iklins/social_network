import { connect } from 'react-redux';
import Users from './Users';
import { StateType } from '../../redux/store';
import { UserType, setUsersAC } from '../../redux/users-reducer';

export type UsersPropsType = mapStateToPropsType & mapDispatchToPropsType;

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  setUsers: (users: UserType[]) => void;
};

const mapStateToProps = (state: StateType) => {
  return {
    users: state.usersPage.users,
  };
};

const mapDispatchToProps: mapDispatchToPropsType = {
  setUsers: setUsersAC,
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
