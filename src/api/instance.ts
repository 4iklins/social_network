import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://social-network.samuraijs.com/api/1.0',
  withCredentials: true,
});

export type ResponseType<T = {}> = {
  resultCode: ResultCode;
  messages: string[];
  data: T;
};

export enum ResultCode {
  succes = 0,
  fail = 1,
  captcha = 10,
}
