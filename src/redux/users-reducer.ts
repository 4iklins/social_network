import { Dispatch } from 'redux';
import { UserType, usersAPI } from '../api/users-api';
import { setAppStatusAC } from './app-reducer';
import { AppThunk } from './store';
import { ResultCode } from '../api/instance';

export type UsersPageType = {
  users: UserDomainType[];
  totalCount: number;
  currentPage: number;
  itemsPerPage: ItemsPerPageType;
  searchUser: string;
};
export type UserDomainType = UserType & {
  followingProgress: boolean;
};

export type ItemsPerPageType = '10' | '20' | '50' | '100';

type ActionsType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setTotalCountAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setUsersPerPAgeAC>
  | ReturnType<typeof followToggleUserAC>
  | ReturnType<typeof searchUserAC>
  | ReturnType<typeof setFollowingInProgressAC>;

const initialState: UsersPageType = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  itemsPerPage: '10',
  searchUser: '',
};

const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {
    case 'SET-USERS':
      return { ...state, users: action.users.map(u => ({ ...u, followingProgress: false })) };
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.count };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.page };
    case 'SET-USERS-PER-PAGE':
      return { ...state, itemsPerPage: action.count };
    case 'FOLLOW-UNFOLLOW-USER':
      return {
        ...state,
        users: state.users.map(user => (user.id === action.userId ? { ...user, followed: action.follow } : user)),
      };
    case 'SEARCH-USER':
      return {
        ...state,
        searchUser: action.search,
      };
    case 'SET-FOLLOWING-IN-PROGRESS':
      return {
        ...state,
        users: state.users.map(u => (u.id === action.userId ? { ...u, followingProgress: action.inProgress } : u)),
      };
    default:
      return state;
  }
};

export const getUsersTC = (url: string) => async (dispatch: Dispatch) => {
  dispatch(setAppStatusAC('loading'));
  try {
    const res = await usersAPI.getUsers(url);
    dispatch(setUsersAC(res.data.items));
    dispatch(setTotalCountAC(res.data.totalCount));
    dispatch(setAppStatusAC('succeeded'));
    return res;
  } catch {}
};
export const followToggleTC =
  (userId: number, follow: boolean): AppThunk =>
  async dispatch => {
    dispatch(setFollowingInProgressAC(userId, true));
    const followed = follow ? usersAPI.followUser : usersAPI.unfollowUser;
    try {
      const res = await followed(userId);
      if (res.data.resultCode === ResultCode.succes) {
        dispatch(followToggleUserAC(userId, follow));
        dispatch(setFollowingInProgressAC(userId, false));
      }
    } catch {}
  };

export const setUsersAC = (users: UserType[]) => {
  return { type: 'SET-USERS', users } as const;
};
export const setTotalCountAC = (count: number) => {
  return { type: 'SET-TOTAL-COUNT', count } as const;
};
export const setCurrentPageAC = (page: number) => {
  return { type: 'SET-CURRENT-PAGE', page } as const;
};

export const setUsersPerPAgeAC = (count: ItemsPerPageType) => {
  return { type: 'SET-USERS-PER-PAGE', count } as const;
};

export const followToggleUserAC = (userId: number, follow: boolean) => {
  return { type: 'FOLLOW-UNFOLLOW-USER', userId, follow } as const;
};

export const searchUserAC = (search: string) => {
  return { type: 'SEARCH-USER', search } as const;
};

export const setFollowingInProgressAC = (userId: number, inProgress: boolean) => {
  return { type: 'SET-FOLLOWING-IN-PROGRESS', userId, inProgress } as const;
};
export default usersReducer;
