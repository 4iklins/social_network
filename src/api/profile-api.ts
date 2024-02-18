import { ResponseType, instance } from './instance';

export const profileAPI = {
  getProfile: (userId: string) => {
    return instance.get<ProfileResponseType>(`/profile/${userId}`);
  },
  getStatus: (userId: string) => {
    return instance.get<string>(`/profile/status/${userId}`);
  },
  setStatus: (status: string) => {
    return instance.put<ResponseType>(`/profile/status`, { status });
  },
};

export type ProfileResponseType = {
  aboutMe: string | null;
  contacts: {
    facebook: string | null;
    website: string | null;
    vk: string | null;
    twitter: string | null;
    instagram: string | null;
    youtube: string | null;
    github: string | null;
    mainLink: string | null;
  };
  lookingForAJob: boolean;
  lookingForAJobDescription: string | null;
  fullName: string;
  userId: number;
  photos: {
    small: string | null;
    large: string | null;
  };
};
