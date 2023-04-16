import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  async emailVerification({ email, type }: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post('/auth/email-verification', { email, type });
  },
};

queryKeyMap.set(authRepository.emailVerification, ['Auth']);
