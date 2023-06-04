import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  async verifyEmail({ email, type }: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post('/auth/email-verification', { email, type });
  },

  async changePassword({
    password,
    passwordConfirm,
    verificationId,
  }: {
    password: string;
    passwordConfirm: string;
    verificationId: string;
  }) {
    return httpClient.patch(`/auth/password-change/${verificationId}`, { password, passwordConfirm });
  },
};

queryKeyMap.set(authRepository.verifyEmail, ['Auth']);
queryKeyMap.set(authRepository.changePassword, ['Auth']);
