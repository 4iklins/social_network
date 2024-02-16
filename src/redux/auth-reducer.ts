import { AuthMeType } from '../api/auth-api';

const initialState = {
  isLogined: false,
  myAuthData: {} as AuthMeType,
};
type AuthStateType = typeof initialState;
type ActionsType = ReturnType<typeof authMeAC> | ReturnType<typeof setMyAuthDataAC>;

const authReducer = (state = initialState, action: ActionsType): AuthStateType => {
  switch (action.type) {
    case 'AUTH-ME':
      return { ...state, isLogined: action.isLogined };
    case 'SET-MY-AUTH-DATA':
      return { ...state, myAuthData: action.data };
    default:
      return state;
  }
};

export const authMeAC = (isLogined: boolean) => {
  return { type: 'AUTH-ME', isLogined } as const;
};

export const setMyAuthDataAC = (data: AuthMeType) => {
  return { type: 'SET-MY-AUTH-DATA', data } as const;
};

export default authReducer;
