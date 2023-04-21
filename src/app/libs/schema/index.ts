import * as yup from 'yup';

export const SCHEMA_EMAIL = yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식을 입력해주세요.');
export const SCHEMA_PASSWORD = yup
  .string()
  .matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).{8,16}$/, '영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.');
export const SCHEMA_NICKNAME = yup.string().matches(/^[a-z0-9가-힣]{1,8}$/);
/**
 * NOTE: password key값을 무조건 password로 해야한다.
 */
export const SCHEMA_CONFIRM_PASSWORD = yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다 :(');
