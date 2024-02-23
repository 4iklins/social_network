import { connect } from 'react-redux';
import Header from './Header';
import { StateType } from '../../redux/store';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { logoutTC } from '../../redux/auth-reducer';

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    status: state.app.status,
    myData: state.auth.myAuthData,
    isLoggined: state.auth.isLogined,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    setAppStatus: (status: RequestStatusType) => dispatch(setAppStatusAC(status)),
    logout: () => dispatch(logoutTC()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
