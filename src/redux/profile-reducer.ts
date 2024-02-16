import { profileAPI } from '../api/profile-api';
import { idGen } from '../common/idForPost';
import { ProfileResponseType } from '../pages/Profile/ProfileConainer';
import { setAppStatusAC } from './app-reducer';
import { AppThunk } from './store';

export interface ProfilePageType {
  posts: PostType[];
  newPostText: string;
  profile: ProfileResponseType | null;
}
export interface PostType {
  id: number;
  text: string;
}

const initialState: ProfilePageType = {
  posts: [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio, cum alias deserunt esse voluptatibus totam unde consequatur, quos assumenda. Dolorem unde minima non?',
    },
    {
      id: 0,
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis quis dolores quidem eum voluptates eaque, optio.',
    },
  ],
  newPostText: '',
  profile: null,
};

export type ActionsType = ReturnType<typeof createPostAC> | ReturnType<typeof setProfileAC>;

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case 'CREATE-POST':
      return {
        ...state,
        posts: [{ id: action.id, text: action.postText }, ...state.posts],
      };
    case 'SET-PROFILE':
      return { ...state, profile: action.profile };
    default:
      return state;
  }
};

export const getProfileTC =
  (userId: string): AppThunk =>
  dispatch => {
    dispatch(setAppStatusAC('loading'));
    profileAPI.getProfile(userId).then(res => {
      dispatch(setProfileAC(res.data));
      dispatch(setAppStatusAC('succeeded'));
    });
  };

export const createPostAC = (postText: string) => {
  return { type: 'CREATE-POST', postText, id: idGen() } as const;
};
export const setProfileAC = (profile: ProfileResponseType) => {
  return { type: 'SET-PROFILE', profile } as const;
};
