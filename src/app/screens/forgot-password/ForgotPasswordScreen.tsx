import { useSearchParams } from 'react-router-dom';
import { FlexBox, ShadowBox } from '@elements';
import { ForgotPasswordForm, ForgotPasswordEmailForm } from '@components';
import { mq } from '@libs/theme';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautYellow from '@assets/images/backgrounds/background-astronaut-yellow.svg';
import BackgroundStar from '@assets/images/backgrounds/background-star.svg';

function ForgotPasswordScreen() {
  // prop destruction

  // lib hooks
  const [searchParams] = useSearchParams();

  // state, ref, querystring hooks
  const step = searchParams.get('step');

  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox
      width='100%'
      height='100%'
      justifyContent='left'
      alignItems='flex-start'
      css={{
        [mq[2]]: {
          alignItems: 'flex-start',
          paddingTop: '40px',
        },
      }}
    >
      <img
        src={BackgroundStar}
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 0,
        }}
        alt='background star'
        draggable={false}
      />
      <img
        src={BackgroundPlanetPrimary}
        css={{
          position: 'absolute',
          left: 'calc(50% - 54vw)',
          top: 'calc(100% - 32vw)',
          width: '54%',
          zIndex: 0,
          [mq[2]]: {
            width: '80%',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          },
        }}
        alt='background planet'
        draggable={false}
      />
      <img
        src={BackgroundAstronautYellow}
        css={{
          position: 'absolute',
          left: 'calc(50% - 32vw)',
          top: 'calc(100% - 42vw)',
          width: '16%',
          zIndex: 1,
          [mq[2]]: {
            width: '20%',
            top: '100%',
            left: '50%',
            transform: 'translate(-50%, -220%)',
          },
        }}
        alt='background astronaut'
        draggable={false}
      />
      <ShadowBox
        css={{
          position: 'absolute',
          marginLeft: 'calc(50% + 166px)',
          top: 'calc(50vh - 295px)',
          padding: '40px',
          zIndex: 2,
          [mq[2]]: {
            top: '40px',
            left: 'calc(50% - 202px)',
            marginLeft: '0',
          },
        }}
      >
        {step === '1' && <ForgotPasswordEmailForm />}
        {step === '2' && <ForgotPasswordForm />}
      </ShadowBox>
    </FlexBox>
  );
}

export { ForgotPasswordScreen };
