import { combineReducers, createStore } from 'redux';
import { profileReducer } from './profile-reducer';
import { messagesReducer } from './messages-reducer';

const rootReducer = combineReducers({
  profilePage: profileReducer,
  messagesPage: messagesReducer,
});

export const store = createStore(rootReducer);

export type AppDispatch = typeof store.dispatch;
export type StateType = ReturnType<typeof rootReducer>;
