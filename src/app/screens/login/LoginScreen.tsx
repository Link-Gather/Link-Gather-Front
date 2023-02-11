import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox, UnderlineTitle } from '@elements';
import { LoginForm, LoginBottomInfo, OauthContainer, ShadowBox } from '@components';
import BackgroundLoginOne from '@assets/images/backgrounds/background-login-1.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { type Theme, mq } from '@libs/theme';

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
      justifyContent='left'
      alignItems='center'
      css={(theme: Theme) => [
        {
          backgroundColor: theme.palette.secondary.n20,
          [mq[2]]: {
            alignItems: 'flex-start',
            paddingTop: '40px',
          },
        },
      ]}
    >
      <div
        css={() => [
          {
            position: 'fixed',
            left: '0',
            width: '58vw',
            height: '100%',
            backgroundImage: `url(${BackgroundLoginOne})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'left bottom',
            zIndex: 0,

            [mq[2]]: {
              width: '80vw',
              marginLeft: '10vw',
            },
          },
        ]}
      />
      <ShadowBox
        padding='40px'
        css={{
          marginLeft: '58vw',
          [mq[1]]: {
            marginLeft: '50vw',
          },
          [mq[2]]: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        <FlexBox width={320} direction='column' css={{ minWidth: '320px', gap: '40px' }}>
          <Link
            to='/'
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <img src={IconArrowLeft} alt='go back' />
          </Link>
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
