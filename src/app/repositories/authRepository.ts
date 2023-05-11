import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  async emailVerification({ email, type }: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post('/auth/email-verification', { email, type });
  },
  async codeVerification({ code, id }: { code: string; id: string }) {
    return httpClient.post(`/auth/email-verification/${id}`, { code });
  },
  async checkedVerificationId({ id }: { id: string }) {
    return httpClient.get(`/auth/email-verification/${id}`);
  },
  async passwordChange({ id, password, passwordConfirm }: { id: string; password: string; passwordConfirm: string }) {
    return httpClient.patch(`/auth/password-change/${id}`, { password, passwordConfirm });
  },
};

queryKeyMap.set(authRepository.emailVerification, ['AuthEmailVerification']);
queryKeyMap.set(authRepository.codeVerification, ['AuthCodeVerification']);
queryKeyMap.set(authRepository.passwordChange, ['AuthChangePassword']);
