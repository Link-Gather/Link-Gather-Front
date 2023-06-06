import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  async verifyEmail(params: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post<{ id: string }>('/auth/email-verification', params);
  },

  async verify({ id, code }: { id: string; code: string }) {
    return httpClient.post(`/auth/email-verification/${id}`, { code });
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
queryKeyMap.set(authRepository.verify, ['Auth']);
queryKeyMap.set(authRepository.changePassword, ['Auth']);
