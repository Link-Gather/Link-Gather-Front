import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  async verifyEmail(params: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post<{ id: string }>('/auth/email-verification', params);
  },

  async verify({ id, code }: { id: string; code: string }) {
    return httpClient.post(`/auth/email-verification/${id}`, { code });
  },
};

queryKeyMap.set(authRepository.verifyEmail, ['Verification']);
queryKeyMap.set(authRepository.verify, ['Verification']);
