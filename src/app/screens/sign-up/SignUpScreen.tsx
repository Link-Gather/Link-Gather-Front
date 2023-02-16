import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlexBox, UnderlineTitle } from '@elements';
import { ImageBox } from 'app/elements/ImagBox/ImageBox';
import { LoginForm, LoginBottomInfo, OauthContainer, ShadowBox } from '@components';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { type Theme, mq } from '@libs/theme';

function SignUpScreen(props: {}) {
  // prop destruction
  // lib hooks
  const { state } = useLocation();

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
      <FlexBox>
        <ImageBox
          position={'absolute'}
          left={'27%'}
          top={'27%'}
          width={'100px'}
          backgroundImage={BackgroundAstronaut1}
          zIndex={1}
        ></ImageBox>
        <ImageBox
          position={'absolute'}
          left={'10%'}
          top={'40%'}
          width={'700px'}
          backgroundImage={BackgroundPlanet1}
          zIndex={0}
        ></ImageBox>
        <ImageBox
          position={'absolute'}
          left={'70%'}
          top={'-1.9%'}
          width={'300px'}
          backgroundImage={BackgroundPlanet2}
          zIndex={0}
        ></ImageBox>
      </FlexBox>
      <ShadowBox
        padding='40px'
        css={{
          width: '566px',
          margin: '0 auto',
        }}
      >
        <FlexBox width={320} direction='column' css={{ minWidth: '320px', height: '500px', gap: '40px' }}>
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
          <UnderlineTitle title='회원가입' />
          <LoginForm />
          <LoginBottomInfo />
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
