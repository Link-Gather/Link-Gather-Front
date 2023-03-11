import React, { useState } from 'react';
import { Button, Input, FlexBox } from '@elements';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
// import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';

interface ILoginInfo {
  name: string;
  type: 'email' | 'password' | 'text';
  isValidated: boolean;
  value: string;
  length: number;
  icon?: string;
  clickEvent?: () => void;
}

const LOGIN_INFO: ILoginInfo[] = [
  {
    name: 'email',
    type: 'email',
    isValidated: false,
    value: '',
    length: 0,
    icon: IconCheckGreen,
  },
  {
    name: 'password',
    type: 'password',
    isValidated: false,
    value: '',
    length: 0,
    icon: IconPasswordShow,
    clickEvent: () => {},
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

  const checkValidation = (type: 'password' | 'email' | 'text', value: string) => {
    const pattern: Record<'password' | 'email' | 'text', RegExp> = {
      email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
      text: /^[a-zA-Z0-9]{8,16}$/,
    };

    return pattern[type].test(value);
  };
  const checkInputInfo = (event: React.ChangeEvent<HTMLInputElement>, inputName: 'email' | 'password' | 'text') => {
    const isValidated = checkValidation(inputName, event.currentTarget.value);
    setLoginInfo(
      loginInfo.map((info) =>
        info.name === inputName
          ? { ...info, isValidated, value: event.currentTarget.value, length: event.currentTarget.value.length }
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
          placeholder={info.name}
          onChange={(event) => checkInputInfo(event, info.type)}
          inputStatus={info.isValidated ? 'active' : info.length > 0 ? 'error' : 'inActive'}
          onClick={info.clickEvent ?? (() => {})}
        >
          {info.isValidated ? <img src={info.icon} alt={`checked ${info.name}`} /> : null}
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
        disabled
      >
        로그인
      </Button>
    </FlexBox>
  );
}

export { LoginForm };
