import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const userRepository = {
  async signIn({ email, password }: { email: string; password: string }) {
    return httpClient.post('/users/sign-in', { email, password });
  },
  async signUp(params: {
    email: string;
    password: string;
    nickname: string;
    provider: string;
    career: number;
    job: string;
    introduction: string;
    stacks: string[];
    urls: string[];
    profileImage: string;
  }) {
    return httpClient.post('/users/sign-up', params);
  },
  async checkNickname(nickname: string) {
    return httpClient.get(`/users/nickname-check?nickname=${nickname}`);
  },
};

queryKeyMap.set(userRepository.signIn, ['User']);
queryKeyMap.set(userRepository.signUp, ['UserSignUp']);
queryKeyMap.set(userRepository.checkNickname, ['UserNicknameCheck']);
