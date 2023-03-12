import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { type InputStatus } from '@elements';

export interface IForgotPasswordInfo {
  name: string;
  type: 'email' | 'password' | 'text';
  status: InputStatus;
  isValidated: boolean;
  value: string;
  icon: string[];
  errorMessage: string;
  inActiveMessage: string;
  activeMessage: string;
  step: number;
  placeholder: string;
}

export const FORGOT_PASSWORD_INFO: IForgotPasswordInfo[] = [
  {
    name: 'email',
    type: 'email',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconCheckGreen],
    errorMessage: '올바른 이메일 형식을 입력해주세요.',
    inActiveMessage: '',
    activeMessage: '',
    step: 1,
    placeholder: '이메일',
  },
  {
    name: 'password',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '',
    inActiveMessage: '영문, 숫자, 특수문자 조합 8~20자리로 입력해주세요.',
    activeMessage: '',
    step: 2,
    placeholder: '비밀번호',
  },
  {
    name: 'confirmPassword',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '비밀번호가 일치하지 않습니다 :(',
    inActiveMessage: '비밀번호를 한번 더 입력해주세요.',
    activeMessage: '비밀번호가 일치합니다 :)',
    step: 2,
    placeholder: '비밀번호 확인',
  },
];
