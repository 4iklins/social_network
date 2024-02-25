import { authAPI } from '../api/auth-api';
import { handleServerAppError } from '../utils/handleServerAppError';
import { handleServerNetworkError } from '../utils/handleServerNetworkError';
import { authMeAC, setMyAuthDataAC } from './auth-reducer';
import { AppThunk } from './store';

type AppStateType = {
  status: RequestStatusType;
  initialized: boolean;
  error: string;
};
export type RequestStatusType = 'loading' | 'succeeded' | 'failed';
const initialState = {
  status: 'succeeded' as RequestStatusType,
  initialized: false,
  error: '',
};
type ActionsType =
  | ReturnType<typeof setAppStatusAC>
  | ReturnType<typeof setInitializedAC>
  | ReturnType<typeof setAppErrorAC>;

const appReducer = (state = initialState, action: ActionsType): AppStateType => {
  switch (action.type) {
    case 'SET-APP-STATUS':
      return { ...state, status: action.status };
    case 'SET-INITIALIZED':
      return { ...state, initialized: true };
    case 'SET-APP-ERROR':
      return { ...state, error: action.error };
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
export const setAppErrorAC = (error: string) => {
  return { type: 'SET-APP-ERROR', error } as const;
};

export const setInitializedTC = (): AppThunk => async dispatch => {
  try {
    const res = await authAPI.me();
    if (res.data.resultCode === 0) {
      dispatch(authMeAC(true));
      dispatch(setMyAuthDataAC(res.data.data));
      dispatch(setInitializedAC());
    } else {
      dispatch(setInitializedAC());
      handleServerAppError(res.data, dispatch);
    }
  } catch (err) {
    handleServerNetworkError(err, dispatch);
  }
};
export default appReducer;
