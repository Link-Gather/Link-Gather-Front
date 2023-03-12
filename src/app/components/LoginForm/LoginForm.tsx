import React, { useState } from 'react';
import { Button, Input, FlexBox } from '@elements';
import { checkValidation } from '@libs/util';
import palette from '@libs/theme/palettes';
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
    <FlexBox direction='column' spacing={4}>
      {loginInfo.map((info) => (
        <Input
          key={info.name}
          type={info.type}
          width='100%'
          height='50px'
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
        height='48px'
        fontSize='20px'
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        onClick={() => console.log('login')}
        css={{
          borderRadius: '32px',
          marginTop: '24px',
        }}
        disabled={!isPassAllValidated}
      >
        로그인
      </Button>
    </FlexBox>
  );
}

export { LoginForm };
