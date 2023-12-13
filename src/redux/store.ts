import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';
import usersReducer from './users-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
  usersPage: usersReducer,
});

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
