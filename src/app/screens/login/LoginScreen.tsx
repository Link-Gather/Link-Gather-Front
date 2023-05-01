import { Link } from 'react-router-dom';
import {
  UnderlineTitle,
  KakaoLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  ShadowBox,
  Typography,
} from '@elements';
import { LoginForm } from '@components';
import { mq, type Theme } from '@libs/theme';
import { PATH_FORGOT_PASSWORD, PATH_HOME, PATH_SIGNUP } from '@routes';
import { BackgroundAstronautPrimary, BackgroundPlanetPrimary, BackgroundStar, IconArrowLeft } from '@assets/images';
import { Stack } from '@mui/material';

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
    <Stack
      direction='row'
      width='100%'
      height='100%'
      justifyContent='left'
      alignItems='center'
      css={{
        [mq[2]]: {
          alignItems: 'flex-start',
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
      <BackgroundAstronautPrimary
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
          padding: '40px',
          zIndex: 2,
          [mq[2]]: {
            top: '40px',
            left: 'calc(50% - 202px)',
            marginLeft: '0',
          },
        }}
      >
        <Stack width='320px' direction='column'>
          <Stack direction='row' width='100%'>
            <Link to={PATH_HOME}>
              <IconArrowLeft css={{ width: '32px', height: '32px' }} />
            </Link>
            <UnderlineTitle title='로그인' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
          </Stack>
          <LoginForm />
          <Stack direction='row' justifyContent='space-around' css={{ padding: '0px 26px', marginBottom: '24px' }}>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <GithubLoginButton />
          </Stack>
          <Stack direction='column' alignItems='center'>
            <Typography
              css={{
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              계정이 없으신가요? &nbsp;
              <Link
                to={PATH_SIGNUP}
                css={(theme: Theme) => ({
                  color: theme.palette.primary.main,
                })}
              >
                회원가입
              </Link>
            </Typography>
            <Typography
              css={{
                fontSize: '14px',
              }}
            >
              <Link to={`${PATH_FORGOT_PASSWORD}?step=email`}>비밀번호 찾기</Link>
            </Typography>
          </Stack>
        </Stack>
      </ShadowBox>
    </Stack>
  );
}

export { LoginScreen };
