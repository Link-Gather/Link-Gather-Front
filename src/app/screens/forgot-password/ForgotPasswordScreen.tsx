import { FlexBox } from '@elements';
import { ShadowBox, ForgotPasswordForm } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautYellow from '@assets/images/backgrounds/background-astronaut-yellow.svg';
import { type Theme, mq } from '@libs/theme';

function ForgotPasswordScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks

  const step = Number(new URLSearchParams(window.location.search).get('step'));

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
            position: 'absolute',
            left: '0',
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'center',
            width: '58%',
            height: '100%',
            backgroundImage: `url(${BackgroundPlanetPrimary})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'left 0 bottom -520px',
            zIndex: 0,

            [mq[0]]: {
              backgroundPosition: 'left 0 bottom calc(-58vw / 2)',
            },
            [mq[2]]: {
              width: '80vw',
              marginLeft: '10vw',
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
              backgroundImage: `url(${BackgroundAstronautYellow})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: '100% auto',
              backgroundPosition: 'left 10px bottom 420px',

              [mq[0]]: {
                backgroundPosition: 'left 10px bottom calc(58vw / 2 - 150px)',
              },
              [mq[2]]: {
                backgroundPosition: 'left 10px bottom 40vw',
              },
            },
          ]}
        />
      </div>
      <ShadowBox
        padding='40px'
        css={{
          marginLeft: 'calc(50% + 166px)',
          [mq[1]]: {
            marginLeft: '50%',
          },
          [mq[2]]: {
            marginLeft: 'auto',
            marginRight: 'auto',
          },
        }}
      >
        <ForgotPasswordForm step={step} />
      </ShadowBox>
    </FlexBox>
  );
}

export { ForgotPasswordScreen };
