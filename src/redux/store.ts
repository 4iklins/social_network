import { AnyAction, applyMiddleware, combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import usersReducer from './users-reducer';
import appReducer from './app-reducer';
import authReducer from './auth-reducer';
import thunk, { ThunkAction } from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
  app: appReducer,
  auth: authReducer,
  form: formReducer,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
export type AppThunk = ThunkAction<void, StateType, unknown, AnyAction>;
// @ts-ignore
window.state = store.getState;
