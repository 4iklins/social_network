import { AuthMeType, FormData, authAPI } from '../api/auth-api';
import { ResultCode } from '../api/instance';
import { AppThunk } from './store';

const initialState = {
  isLogined: false,
  myAuthData: {} as AuthMeType,
  captcha: '',
};
type AuthStateType = typeof initialState;
type ActionsType = ReturnType<typeof authMeAC> | ReturnType<typeof setMyAuthDataAC> | ReturnType<typeof setCaptchaAC>;

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'AUTH-ME':
      return { ...state, isLogined: action.isLogined };
    case 'SET-MY-AUTH-DATA':
      return { ...state, myAuthData: action.data };
    case 'SET-CAPTCHA':
      return { ...state, captcha: action.captcha };
    default:
      return state;
  }
};

export const loginTC =
  (data: FormData): AppThunk =>
  dispatch => {
    authAPI.login(data).then(res => {
      if (res.data.resultCode === ResultCode.succes) {
        dispatch(setMyAuthDataAC({ id: res.data.data.userId, email: '', login: '' }));
        dispatch(authMeAC(true));
      }
      if (res.data.resultCode === ResultCode.captcha) {
        authAPI.captcha().then(res => {
          dispatch(setCaptchaAC(res.data.url));
        });
      }
    });
  };

export const logoutTC = (): AppThunk => dispatch => {
  authAPI.logout().then(res => {
    if (res.data.resultCode === ResultCode.succes) {
      debugger;
      dispatch(setCaptchaAC(''));
      dispatch(authMeAC(false));
      dispatch(setMyAuthDataAC({} as AuthMeType));
    }
  });
};

export const authMeAC = (isLogined: boolean) => {
  return { type: 'AUTH-ME', isLogined } as const;
};

export const setMyAuthDataAC = (data: AuthMeType) => {
  return { type: 'SET-MY-AUTH-DATA', data } as const;
};
export const setCaptchaAC = (captcha: string) => {
  return { type: 'SET-CAPTCHA', captcha } as const;
};

export default authReducer;
