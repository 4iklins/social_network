import { authAPI } from '../api/auth-api';
import { authMeAC, setMyAuthDataAC } from './auth-reducer';
import { AppThunk } from './store';

type AppStateType = {
  status: RequestStatusType;
  initialized: boolean;
};
export type RequestStatusType = 'loading' | 'succeeded' | 'failed';
const initialState = {
  status: 'succeeded' as RequestStatusType,
  initialized: false,
};
type ActionsType = ReturnType<typeof setAppStatusAC> | ReturnType<typeof setInitializedAC>;
const appReducer = (state = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-APP-STATUS':
      return { ...state, status: action.status };
    case 'SET-INITIALIZED':
      return { ...state, initialized: true };
    default:
      return state;
  }
};

export const setAppStatusAC = (status: RequestStatusType) => {
  return { type: 'SET-APP-STATUS', status } as const;
};
export const setInitializedAC = () => {
  return { type: 'SET-INITIALIZED' } as const;
};

export const setInitializedTC = (): AppThunk => dispatch => {
  authAPI.me().then(res => {
    if (res.data.resultCode === 0) {
      dispatch(authMeAC(true));
      dispatch(setMyAuthDataAC(res.data.data));
      dispatch(setInitializedAC());
    } else {
      dispatch(setInitializedAC());
    }
  });
};
export default appReducer;
