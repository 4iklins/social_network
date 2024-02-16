import { connect } from 'react-redux';
import Header from './Header';
import { StateType } from '../../redux/store';
import { RequestStatusType, setAppStatusAC } from '../../redux/app-reducer';

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = {
  setAppStatus: (status: RequestStatusType) => void;
};
export type HeaderPropsType = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    status: state.app.status,
    myData: state.auth.myAuthData
  };
};

const mapDispatchToProps = {
  setAppStatus: setAppStatusAC,
};
export default connect(mapStateToProps, mapDispatchToProps)(Header);
