import axios, { AxiosResponse } from 'axios';
import { BASE_URL } from './baseURL';
import { GetResponseType, PostResponseType } from './types';

const instance = axios.create({
  baseURL: BASE_URL,
});

export const getPosts = (): Promise<
  AxiosResponse<GetResponseType<PostResponseType>>
> => {
  return instance.get<GetResponseType<PostResponseType>>(`/posts`);
};
