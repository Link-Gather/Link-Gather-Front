import React from 'react';
import { FlexBox, GoogleLoginButton, KakaoLoginButton } from '@elements';
import { Theme } from '@libs/theme';
import BackgroundLoginOne from '@assets/images/backgroundLogin1.svg';
import { ShadowBox } from '@components';
import { UnderlineTitle } from 'app/elements/UnderlineTitle/UnderlineTitle';

// TODO: SW-56에서 구현 예정. 현재는 oauth 연결을 위해 만들어 놓음
function LoginScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox
      width='100%'
      height='100vh'
      justifyContent='center'
      alignItems='center'
      css={(theme: Theme) => [
        {
          backgroundColor: theme.palette.secondary.n20,
          backgroundImage: `url(${BackgroundLoginOne})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(50% - 320px) 165px',
        },
      ]}
    >
      <ShadowBox padding='40px' margin='0 0 0 304px'>
        <FlexBox width={320} direction='column'>
          <UnderlineTitle title='로그인' />
          <FlexBox justifyContent='space-around' css={{ padding: '0 26px' }}>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <button>Github</button>
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { LoginScreen };
