import React from 'react';
import { FlexBox, UnderlineTitle } from '@elements';
import { LoginForm, LoginBottomInfo, OauthContainer, ShadowBox } from '@components';
import BackgroundLoginOne from '@assets/images/backgrounds/backgroundLogin1.svg';
import { type Theme } from '@libs/theme';

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
      <ShadowBox padding='40px' margin='0 0 0 550px'>
        <FlexBox width={320} direction='column' css={{ gap: '40px' }}>
          <UnderlineTitle title='로그인' />
          <LoginForm />
          <OauthContainer />
          <LoginBottomInfo />
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { LoginScreen };
