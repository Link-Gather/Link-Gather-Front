import { httpClient, queryKeyMap } from '@libs/index';

export const userRepository = {
  async signin({ email, password }: { email: string; password: string }) {
    return await httpClient.post('/users/sign-in', { email, password });
  },
};

queryKeyMap.set(userRepository.signin, ['User']);
