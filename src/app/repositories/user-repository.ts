import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';
import { stringify } from 'qs';

export const userRepository = {
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
queryKeyMap.set(userRepository.checkDuplicateNickname, ['User']);
