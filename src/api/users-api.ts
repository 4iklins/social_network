import { instance } from './instance';

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
export type UsersResponseType = {
  error: string | null;
  items: UserType[];
  totalCount: number;
};

export const usersAPI = {
  getUsers(url: string) {
    return instance.get<UsersResponseType>('/users' + url);
  },
};
