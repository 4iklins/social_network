import { ResponseType, instance } from './instance';

export type AuthMeType = {
  id: number;
  email: string;
  login: string;
};


export const autAPI = {
  me() {
    return instance.get<ResponseType<AuthMeType>>('/auth/me');
  },
};
