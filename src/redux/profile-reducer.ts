import { ResultCode } from '../api/instance';
import { ProfileResponseType, profileAPI } from '../api/profile-api';
import { idGen } from '../common/idForPost';
import { setAppStatusAC } from './app-reducer';
import { AppThunk } from './store';

export interface ProfilePageType {
  posts: PostType[];
  newPostText: string;
  profile: ProfileResponseType | null;
  status: string;
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
  status: '',
};

export type ActionsType =
  | ReturnType<typeof createPostAC>
  | ReturnType<typeof setProfileAC>
  | ReturnType<typeof setStatusAC>;

export const profileReducer = (state: ProfilePageType = initialState, action: ActionsType): ProfilePageType => {
  switch (action.type) {
    case 'CREATE-POST':
      return {
        ...state,
        posts: [{ id: action.id, text: action.postText }, ...state.posts],
      };
    case 'SET-PROFILE':
      return { ...state, profile: action.profile };
    case 'SET-STATUS':
      return { ...state, status: action.status };
    default:
      return state;
  }
};

export const getProfileTC =
  (userId: string): AppThunk =>
  async dispatch => {
    dispatch(setAppStatusAC('loading'));
    try {
      const profile = profileAPI.getProfile(userId);
      const status = profileAPI.getStatus(userId);
      const res = await Promise.all([profile, status]);
      dispatch(setProfileAC(res[0].data));
      dispatch(setStatusAC(res[1].data));
      dispatch(setAppStatusAC('succeeded'));
    } catch {}
  };

export const setProfileStatusTC =
  (status: string): AppThunk =>
  async dispatch => {
    try {
      const res = await profileAPI.setStatus(status);
      if (res.data.resultCode === ResultCode.succes) {
        dispatch(setStatusAC(status));
      }
    } catch {}
  };

export const createPostAC = (postText: string) => {
  return { type: 'CREATE-POST', postText, id: idGen() } as const;
};
export const setProfileAC = (profile: ProfileResponseType) => {
  return { type: 'SET-PROFILE', profile } as const;
};

export const setStatusAC = (status: string) => {
  return { type: 'SET-STATUS', status } as const;
};
