import { Dispatch } from 'redux';
import { ResponseType } from '../api/instance';
import { setAppErrorAC, setAppStatusAC } from '../redux/app-reducer';

// generic function

export const handleServerAppError = <T>(data: ResponseType<T>, dispatch: Dispatch) => {
  if (data.messages.length) {
    if (data.messages[0] === 'You are not authorized') {
      dispatch(setAppErrorAC(''));
    } else {
      dispatch(setAppErrorAC(data.messages[0]));
    }
  } else {
    dispatch(setAppErrorAC('Some error occurred'));
  }
  dispatch(setAppStatusAC('failed'));
};
