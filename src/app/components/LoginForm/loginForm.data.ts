import { InputStatus } from '@elements';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';

export interface ILoginInfo {
  name: string;
  type: 'email' | 'password' | 'text';
  status: InputStatus;
  isValidated: boolean;
  value: string;
  placeholder: string;
  icon: string[];
  errorMessage: string;
  activeMessage?: string;
  inActiveMessage?: string;
}

export const LOGIN_INFO: ILoginInfo[] = [
  {
    name: 'email',
    type: 'email',
    status: 'inActive',
    isValidated: false,
    value: '',
    placeholder: '이메일',
    icon: [IconCheckGreen],
    errorMessage: '올바른 이메일 형식을 입력해주세요.',
  },
  {
    name: 'password',
    type: 'password',
    status: 'inActive',
    isValidated: false,
    value: '',
    placeholder: '비밀번호',
    icon: [IconPasswordHide, IconPasswordShow],
    errorMessage: '비밀번호를 다시 확인해주세요.',
  },
];
