import { httpClient } from '@libs/http-client';
import { queryKeyMap } from '@libs/query';

export const authRepository = {
  /**
   * 이메일 인증
   * @param email
   * @param type
   */
  async verifyEmail({ email, type }: { email: string; type: 'signup' | 'password' }) {
    return httpClient.post<{ id: string }>('/auth/email-verification', { email, type });
  },

  /**
   * 비밀번호 변경
   * @param password
   * @param passwordConfirm
   * @param verificationId
   */
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

  /**
   * 이메일 인증 코드 확인
   * @param id
   * @param code
   */
  async verifyCode({ id, code }: { id: string; code: string }) {
    return httpClient.post(`/auth/email-verification/${id}`, { code });
  },
};

queryKeyMap.set(authRepository.verifyEmail, ['Auth']);
queryKeyMap.set(authRepository.changePassword, ['Auth']);
queryKeyMap.set(authRepository.verifyCode, ['Auth']);
