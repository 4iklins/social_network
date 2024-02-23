import { connect, useSelector } from 'react-redux';
import { Redirect, RouteComponentProps } from 'react-router-dom';
import { StateType } from '../../redux/store';
import Wrapper from '../../components/Wrapper/Wrapper';
import style from './login.module.css';
import LoginForm from './LoginForm/LoginForm';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { FormData } from '../../api/auth-api';
import { loginTC } from '../../redux/auth-reducer';

const Login = (props: LoginProps) => {
  const isLoggined = useSelector<StateType, boolean>(state => state.auth.isLogined);
  if (isLoggined) {
    return <Redirect to={'/'} />;
  }
  const onSubmit = (formData: FormData) => {
    props.login(formData);
  };
  return (
    <Wrapper>
      <div className={style.login}>
        <LoginForm onSubmit={onSubmit} captcha={props.captcha} login={props.login}/>
      </div>
    </Wrapper>
  );
};

type mapStateToPropsType = ReturnType<typeof mapStateToProps>;
type mapDispatchToPropsType = ReturnType<typeof mapDispatchToProps>;
export type LoginProps = mapStateToPropsType & mapDispatchToPropsType;

const mapStateToProps = (state: StateType) => {
  return {
    captcha: state.auth.captcha,
  };
};

const mapDispatchToProps = (dispatch: ThunkDispatch<StateType, unknown, AnyAction>) => {
  return {
    login: (data: FormData) => dispatch(loginTC(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
