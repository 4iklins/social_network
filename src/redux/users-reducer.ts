import { UserType } from '../api/users-api';

export type UsersPageType = {
  users: UserType[];
  totalCount: number;
  currentPage: number;
  itemsPerPage: ItemsPerPageType;
};

export type ItemsPerPageType = '10' | '20' | '50' | '100';

type ActionsType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setTotalCountAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setUsersPerPAgeAC>
  | ReturnType<typeof followUserAC>
  | ReturnType<typeof unfollowUserAC>;

const initialState: UsersPageType = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  itemsPerPage: '10',
};

const usersReducer = (state = initialState, action: ActionsType): UsersPageType => {
  switch (action.type) {
    case 'SET-USERS':
      return { ...state, users: action.users };
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.count };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.page };
    case 'SET-USERS-PER-PAGE':
      return { ...state, itemsPerPage: action.count };
    case 'FOLLOW-USER':
      return {
        ...state,
        users: state.users.map(user => (user.id === action.userId ? { ...user, followed: true } : user)),
      };
    case 'UNFOLLOW-USER':
      return {
        ...state,
        users: state.users.map(user => (user.id === action.userId ? { ...user, followed: false } : user)),
      };
    default:
      return state;
  }
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

export const followUserAC = (userId: number) => {
  return { type: 'FOLLOW-USER', userId } as const;
};

export const unfollowUserAC = (userId: number) => {
  return { type: 'UNFOLLOW-USER', userId } as const;
};
export default usersReducer;
