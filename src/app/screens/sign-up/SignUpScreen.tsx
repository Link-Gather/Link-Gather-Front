import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import palette from '@libs/theme/palettes/default';
import { SignupBox } from './step';
import { ShadowBox } from '@components';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox, UnderlineTitle, RequestButton, ImageBox, Input, Button } from '@elements';
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
          backgroundColor: '#2E558E',
          [mq[2]]: {
            alignItems: 'flex-start',
            paddingTop: '40px',
          },
        },
      ]}
    >
      <ImageBox
        top='28%'
        left='27%'
        width='100px'
        height='10rem'
        backgroundImage={BackgroundAstronaut1}
        zIndex='1'
        position='fixed'
      ></ImageBox>
      <ImageBox
        top='40%'
        left='10%'
        width='700px'
        height='40rem'
        backgroundImage={BackgroundPlanet1}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <ImageBox
        left='70%'
        top='-1.9%'
        width='300px'
        height='500px'
        backgroundImage={BackgroundPlanet2}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <SignupBox />
    </FlexBox>
  );
}

export { SignUpScreen };
