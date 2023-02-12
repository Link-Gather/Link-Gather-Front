import React from 'react';
import { Link } from 'react-router-dom';
import { FlexBox, UnderlineTitle } from '@elements';
import { LoginForm, LoginBottomInfo, OauthContainer, ShadowBox } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautPrimary from '@assets/images/backgrounds/background-astronaut-primary.svg';
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
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '58vw',
            height: '100%',
            backgroundImage: `url(${BackgroundPlanetPrimary})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'left -5vw bottom -40vh',
            zIndex: 0,

            [mq[0]]: {
              backgroundPosition: 'left 0 bottom -30vh',
            },
            [mq[1]]: {
              backgroundPosition: 'left 0 bottom -20vh',
            },
            [mq[2]]: {
              width: '80vw',
              marginLeft: '10vw',
              backgroundPosition: 'left 0 bottom -15vh',
            },
          },
        ]}
      >
        <div
          css={() => [
            {
              position: 'absolute',
              width: '34%',
              height: '100%',
              backgroundImage: `url(${BackgroundAstronautPrimary})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
              backgroundPosition: 'left 0 bottom 50vh',
              marginLeft: '-5vw',

              [mq[0]]: {
                backgroundPosition: 'left 0 bottom 30vh',
                marginLeft: '0',
              },
              [mq[1]]: {
                backgroundPosition: 'left 0 bottom 24vh',
              },
              [mq[2]]: {
                backgroundPosition: 'left 0 bottom 22vh',
              },
            },
          ]}
        />
      </div>
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
