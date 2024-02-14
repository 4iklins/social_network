import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  app: appReducer,
  auth: authReducer,
});

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
// @ts-ignore
window.state = store.getState;
