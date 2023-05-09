import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const userRepository = {
  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post('/users/sign-in', { email, password });
  },
  async checkNickname(nickname: string) {
    return httpClient.get(`/users/nickname-check?nickname=${nickname}`);
  },
};

queryKeyMap.set(userRepository.signIn, ['User']);
queryKeyMap.set(userRepository.checkNickname, ['UserNicknameCheck']);
