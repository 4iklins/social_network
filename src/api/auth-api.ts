import { ResponseType, instance } from './instance';

export type AuthMeType = {
  id: number;
  email: string;
  login: string;
};

export type FormData = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha?: string;
};

export const authAPI = {
  me() {
    return instance.get<ResponseType<AuthMeType>>('/auth/me');
  },
  login(data: FormData) {
    return instance.post<ResponseType<{ userId: number }>>('/auth/login', { ...data });
  },
  logout() {
    return instance.delete<ResponseType>('/auth/login');
  },
  captcha() {
    return instance.get<{ url: string }>('/security/get-captcha-url');
  },
};
