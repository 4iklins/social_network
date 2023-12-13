export type UsersPageType = {
  users: UserType[];
};
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

type ActionType = ReturnType<typeof setUsersAC>;

const initialState: UsersPageType = {
  users: [],
};

const usersReducer = (state = initialState, action: ActionType): UsersPageType => {
  switch (action.type) {
    case 'SET-USERS':
      return { ...state, users: action.users };
    default:
      return state;
  }
};

export const setUsersAC = (users: UserType[]) => {
  return { type: 'SET-USERS', users } as const;
};

export default usersReducer;
