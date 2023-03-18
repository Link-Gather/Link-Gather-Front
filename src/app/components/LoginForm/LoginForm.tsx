import React, { useState } from 'react';
import { Button, Input, FlexBox } from '@elements';
import { checkValidation } from '@libs/util';
import palette from '@libs/theme/palettes';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { LOGIN_INFO, type ILoginInfo } from './loginForm.data';

function LoginForm() {
  // prop destruction
  // lib hooks
  // state, ref hooks

  const [loginInfo, setLoginInfo] = useState<ILoginInfo[]>(LOGIN_INFO);

  // form hooks
  // query hooks
  // calculated values

  const isPassAllValidated = loginInfo.filter((info) => info.isValidated).length === loginInfo.length;

  // effects
  // handlers

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
    <FlexBox direction='column' css={{ marginBottom: '40px' }}>
      <Input
        type='email'
        width='100%'
        height='50px'
        placeholder='이메일'
        onChange={(event) => checkInputInfo(event, 'email')}
        css={{ marginBottom: '16px' }}
      >
        <img src={IconCheckGreen} alt='checked email' />
      </Input>
      <Input
        type='password'
        width='100%'
        height='50px'
        placeholder='비밀번호'
        onChange={(event) => checkInputInfo(event, 'password')}
        onClick={handlePasswordVisible}
        css={{ marginBottom: '16px' }}
      >
        <img src={IconPasswordHide} alt='checked password' />
      </Input>
      <Button
        width='100%'
        height='48px'
        fontSize='20px'
        borderRadius='32px'
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        // TODO: 로그인 API 연동
        css={{
          marginTop: '8px',
        }}
        disabled={!isPassAllValidated}
      >
        로그인
      </Button>
    </FlexBox>
  );
}

export { LoginForm };
