import * as yup from 'yup';

export const SCHEMA_EMAIL = yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식을 입력해주세요.');
export const SCHEMA_PASSWORD = yup
  .string()
  .matches(
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).*$/,
    '8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
  )
  .min(8)
  .max(16);
export const SCHEMA_NICKNAME = yup
  .string()
  .matches(/^[a-zA-Z0-9가-힣]+$/, '8자이내, 한글, 영문 숫자 혼용 가능')
  .min(1)
  .max(8);
export const SCHEMA_CONFIRM_PASSWORD = yup.string().oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다 :(');
