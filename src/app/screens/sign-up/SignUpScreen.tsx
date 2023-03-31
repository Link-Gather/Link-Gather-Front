import React from 'react';
import { useLocation } from 'react-router-dom';
import { SignupBox } from './signupbox';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox, ImageBox } from '@elements';
import { type Theme, mq } from '@libs/theme';

function SignUpScreen() {
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
        alt='signupBackground'
        top='28%'
        left='27%'
        width='100px'
        height='10rem'
        imageSrc={BackgroundAstronaut1}
        zIndex='1'
        position='fixed'
      ></ImageBox>
      <ImageBox
        alt='signupBackground'
        top='40%'
        left='10%'
        width='700px'
        height='40rem'
        imageSrc={BackgroundPlanet1}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <ImageBox
        alt='signupBackground'
        left='70%'
        top='-1.9%'
        width='300px'
        height='500px'
        imageSrc={BackgroundPlanet2}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <SignupBox />
    </FlexBox>
  );
}

export { SignUpScreen };
