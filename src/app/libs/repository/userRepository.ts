import { UserSignIn } from '@models';
import { httpClient } from '..';

export const userRepository = {
  async signin(email: string, password: string) {
    return await httpClient.post<UserSignIn>('/users/sign-in', { email, password });
  },
};
