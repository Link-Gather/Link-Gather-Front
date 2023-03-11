import React, { useState } from 'react';
import { Button, Input, FlexBox, InputStatus } from '@elements';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';

interface ILoginInfo {
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

const LOGIN_INFO: ILoginInfo[] = [
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

function LoginForm() {
  // prop destruction
  // lib hooks
  // state, ref hooks

  const [loginInfo, setLoginInfo] = useState<ILoginInfo[]>(LOGIN_INFO);

  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  const checkValidation = (type: string, value: string) => {
    const pattern: Record<string, RegExp> = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    };

    return pattern[type].test(value);
  };

  const checkInputInfo = (event: React.ChangeEvent<HTMLInputElement>, inputName: string) => {
    const targetValue = event.currentTarget.value;
    const isValidated = checkValidation(inputName, targetValue);

    setLoginInfo(
      loginInfo.map((info) =>
        info.name === inputName
          ? {
              ...info,
              status: isValidated ? 'active' : targetValue.length > 0 ? 'error' : 'inActive',
              isValidated,
              value: targetValue,
            }
          : info
      )
    );
  };

  const handlePasswordVisible = () => {
    setLoginInfo(
      loginInfo.map((info) =>
        info.name === 'password'
          ? {
              ...info,
              type: info.type === 'password' ? 'text' : 'password',
            }
          : info
      )
    );
  };

  return (
    <FlexBox direction='column' spacing={4}>
      {loginInfo.map((info) => (
        <Input
          key={info.name}
          type={info.type}
          width='100%'
          height={50}
          placeholder={info.placeholder}
          onChange={(event) => checkInputInfo(event, info.name)}
          inputStatus={info.status}
          onClick={info.name === 'password' ? handlePasswordVisible : () => {}}
          message={info[`${info.status}Message`]}
        >
          {info.isValidated && info.type === 'email' ? <img src={info.icon[0]} alt={`checked ${info.name}`} /> : null}
          {info.value.length > 0 && info.name === 'password' ? (
            <img src={info.type === 'password' ? info.icon[0] : info.icon[1]} alt={`checked ${info.name}`} />
          ) : null}
        </Input>
      ))}
      <Button
        width='100%'
        height={48}
        fontSize={20}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        onClick={() => console.log('login')}
        css={{
          marginTop: 24,
        }}
        disabled={!(loginInfo.length === loginInfo.filter((info) => !!info.isValidated).length)}
      >
        로그인
      </Button>
    </FlexBox>
  );
}

export { LoginForm };
