import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const AuthRepository = {
  async emailVerification(params: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post<{ id: string }>('/auth/email-verification', params);
  },

  async verify({ id, code }: { id: string; code: string }) {
    return httpClient.post(`/auth/email-verification/${id}`, { code });
  },
};

queryKeyMap.set(AuthRepository.emailVerification, ['Verification']);
queryKeyMap.set(AuthRepository.verify, ['Verification']);
