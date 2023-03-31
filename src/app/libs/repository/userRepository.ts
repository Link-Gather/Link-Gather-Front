import { UserSignIn } from '@models';
import { httpClient } from '..';

const API_SIGNIN = '/users/sign-in';

export const userRepository = {
  async signin(email: string, password: string) {
    return await httpClient.post<UserSignIn>(API_SIGNIN, { email, password });
  },
};
