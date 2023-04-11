import React from 'react';
import { useLocation } from 'react-router-dom';
import { SignupBox } from '../../components/signupbox';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox } from '@elements';
import { mq } from '@libs/theme';

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
      css={{
        backgroundColor: '#2E558E',
        [mq[2]]: {
          alignItems: 'flex-start',
          paddingTop: '40px',
        },
      }}
    >
      <img
        alt='BackgroundAstronaut1'
        src={BackgroundAstronaut1}
        css={{ position: 'fixed', top: '28%', left: '27%', width: '100px', height: '150px', zIndex: '1' }}
      />
      <img
        alt='BackgroundPlanet1'
        src={BackgroundPlanet1}
        css={{ position: 'fixed', top: '40%', left: '10%', width: '700px', height: '700px', zIndex: '0' }}
      />
      <img
        alt='BackgroundPlanet2'
        src={BackgroundPlanet2}
        css={{ position: 'fixed', top: '-13%', left: '70%', width: '300px', height: '500px', zIndex: '0' }}
      />
      <SignupBox />
    </FlexBox>
  );
}

export { SignUpScreen };
