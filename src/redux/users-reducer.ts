export type UsersPageType = {
  users: UserType[];
  totalCount: number;
  currentPage: number;
  itemsPerPage: itemsPerPageType;
};

export type itemsPerPageType = '10' | '20' | '50' | '100';

export type UserType = {
  name: string;
  id: number;
  uniqueUrlName: string | null;
  photos: {
    small: string | null;
    large: string | null;
  };
  status: string | null;
  followed: boolean;
};

type ActionType =
  | ReturnType<typeof setUsersAC>
  | ReturnType<typeof setTotalCountAC>
  | ReturnType<typeof setCurrentPageAC>
  | ReturnType<typeof setUsersPerPAgeAC>;

const initialState: UsersPageType = {
  users: [],
  totalCount: 0,
  currentPage: 1,
  itemsPerPage: '10',
};

const usersReducer = (state = initialState, action: ActionType): UsersPageType => {
  switch (action.type) {
    case 'SET-USERS':
      return { ...state, users: action.users };
    case 'SET-TOTAL-COUNT':
      return { ...state, totalCount: action.count };
    case 'SET-CURRENT-PAGE':
      return { ...state, currentPage: action.page };
    case 'SET-USERS-PER-PAGE':
      return { ...state, itemsPerPage: action.count };
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

export const setUsersPerPAgeAC = (count: itemsPerPageType) => {
  return { type: 'SET-USERS-PER-PAGE', count } as const;
};

export default usersReducer;
