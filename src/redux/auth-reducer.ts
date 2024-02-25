import { AuthMeType, FormData, authAPI } from '../api/auth-api';
import { ResultCode } from '../api/instance';
import { handleServerAppError } from '../utils/handleServerAppError';
import { handleServerNetworkError } from '../utils/handleServerNetworkError';
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
  async dispatch => {
    try {
      const res = await authAPI.login(data);
      if (res.data.resultCode === ResultCode.succes) {
        dispatch(setMyAuthDataAC({ id: res.data.data.userId, email: '', login: '' }));
        dispatch(authMeAC(true));
      } else {
        handleServerAppError(res.data, dispatch);
      }
      if (res.data.resultCode === ResultCode.captcha) {
        authAPI.captcha().then(res => {
          dispatch(setCaptchaAC(res.data.url));
        });
      }
    } catch (err) {
      handleServerNetworkError(err, dispatch);
    }
  };

export const logoutTC = (): AppThunk => async dispatch => {
  try {
    const res = await authAPI.logout();
    if (res.data.resultCode === ResultCode.succes) {
      dispatch(setCaptchaAC(''));
      dispatch(authMeAC(false));
      dispatch(setMyAuthDataAC({} as AuthMeType));
    } else {
      handleServerAppError(res.data, dispatch);
    }
  } catch (err) {
    handleServerNetworkError(err, dispatch);
  }
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
