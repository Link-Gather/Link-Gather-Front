import * as yup from 'yup';

export const SCHEMA_EMAIL = yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식을 입력해주세요.');
export const SCHEMA_PASSWORD = yup
  .string()
  .matches(
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!@#$%^&*\-_+.,?])[A-Za-z\d!@#$%^&*\-_+.,?]{8,16}$/,
    '8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
  );

/**
 * NOTE: password key값을 무조건 password로 해야한다.
 */
export const SCHEMA_CONFIRM_PASSWORD = yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다 :(');
