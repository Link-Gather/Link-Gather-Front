import React, { useState } from 'react';
import { Button, Input, FlexBox } from '@elements';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';

function LoginForm() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);
  const [isEmail, setIsEmail] = useState<boolean>(false);
  const [isValue, setIsValue] = useState<boolean>(false);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const handlePasswordShow = () => {
    setIsShowPassword(!isShowPassword);
  };

  // TODO : 함수 따로 빼서 관리, 타입 어떻게 관리할지 논의 필요
  const checkValidation = (type: 'password' | 'email', value: string) => {
    const pattern: Record<'password' | 'email', RegExp> = {
      email: /^[^s@]+@[^s@]+.[^s@]+$/,
      password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,16}$/,
    };

    return pattern[type].test(value);
  };
  const checkEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    setIsEmail(checkValidation('email', event.currentTarget.value));
  };

  const checkPassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsValue(event.currentTarget.value.length > 0);
  };

  return (
    <FlexBox direction='column' spacing={4}>
      <Input type='email' width='100%' height={50} placeholder='email' onChange={checkEmail}>
        {isEmail && <img src={IconCheckGreen} alt='checked email' />}
      </Input>
      <Input
        type={isShowPassword ? 'text' : 'password'}
        minLength={8}
        maxLength={16}
        width='100%'
        height={50}
        placeholder='password'
        onClick={handlePasswordShow}
      >
        <img src={isShowPassword ? IconPasswordShow : IconPasswordHide} alt='password' />
      </Input>
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
