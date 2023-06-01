import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';
import { stringify } from 'qs';

export const userRepository = {
  async signup(params: {
    email: string;
    password: string;
    nickname: string;
    career: number;
    job: JobType;
    introduction: string;
    stacks: number[];
    urls: string[];
    profileImage: string;
  }) {
    return httpClient.post('/users/sign-up', { ...params, provider: 'link-gather' });
  },

  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post('/users/sign-in', { email, password });
  },

  async checkDuplicateNickname({ nickname }: { nickname: string }) {
    return httpClient.get('/users/nickname-check', {
      params: { nickname },
      paramsSerializer: (params) => stringify(params),
    });
  },
};

queryKeyMap.set(userRepository.signIn, ['User']);
queryKeyMap.set(userRepository.signup, ['User']);
queryKeyMap.set(userRepository.checkDuplicateNickname, ['User']);
