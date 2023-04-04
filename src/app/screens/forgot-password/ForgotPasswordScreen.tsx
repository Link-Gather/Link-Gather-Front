import { FlexBox, ShadowBox } from '@elements';
import { ForgotPasswordForm, ForgotPasswordEmailForm } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautYellow from '@assets/images/backgrounds/background-astronaut-yellow.svg';
import { mq } from '@libs/theme';
import { useLocation } from 'react-router-dom';

function ForgotPasswordScreen() {
  // prop destruction
  // lib hooks
  const location = useLocation();

  // state, ref, querystring hooks
  const step = Number(new URLSearchParams(location.search).get('step'));

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
      <div
        css={{
          position: 'absolute',
          left: '0',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'center',
          width: '54%',
          height: '100%',
          backgroundImage: `url(${BackgroundPlanetPrimary})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: '100% auto',
          backgroundPosition: 'right -30px bottom calc(-50vw / 2)',
          zIndex: 0,
          [mq[0]]: {
            width: '58%',
            backgroundPosition: 'left 0 bottom calc(-58vw / 2)',
          },
          [mq[2]]: {
            width: '80vw',
            marginLeft: '10vw',
          },
        }}
      >
        <div
          css={{
            position: 'absolute',
            width: '28%',
            height: '100%',
            backgroundImage: `url(${BackgroundAstronautYellow})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'right 0 bottom calc(50vw / 2 - 100px)',

            [mq[0]]: {
              width: '34%',
              backgroundPosition: 'left 10px bottom calc(58vw / 2 - 150px)',
            },
            [mq[2]]: {
              backgroundPosition: 'left 10px bottom 40vw',
            },
          }}
        />
      </div>
      <ShadowBox
        css={{
          marginTop: 'calc(50vh - 295px)',
          marginLeft: 'calc(50% + 166px)',
          padding: '40px',
          [mq[1]]: {
            marginLeft: '50%',
          },
          [mq[2]]: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        {step === 1 && <ForgotPasswordEmailForm />}
        {step === 2 && <ForgotPasswordForm />}
      </ShadowBox>
    </FlexBox>
  );
}

export { ForgotPasswordScreen };
