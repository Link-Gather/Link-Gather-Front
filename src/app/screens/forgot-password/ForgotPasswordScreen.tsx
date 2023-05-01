import { useSearchParams } from 'react-router-dom';
import { ShadowBox } from '@elements';
import { ForgotPasswordForm, ForgotPasswordEmailForm } from '@components';
import { mq } from '@libs/theme';
import { BackgroundAstronautYellow, BackgroundPlanetPrimary, BackgroundStar } from '@assets/images';
import { Stack } from '@mui/material';

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
    <Stack
      direction='row'
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
      <BackgroundStar
        css={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 0,
        }}
      />
      <BackgroundPlanetPrimary
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
      />
      <BackgroundAstronautYellow
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
        {step === 'email' && <ForgotPasswordEmailForm />}
        {step === 'password' && <ForgotPasswordForm />}
      </ShadowBox>
    </Stack>
  );
}

export { ForgotPasswordScreen };
