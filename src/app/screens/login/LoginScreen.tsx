import { Link } from 'react-router-dom';
import {
  FlexBox,
  UnderlineTitle,
  KakaoLoginButton,
  GoogleLoginButton,
  GithubLoginButton,
  ShadowBox,
  Typography,
} from '@elements';
import { LoginForm } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautPrimary from '@assets/images/backgrounds/background-astronaut-primary.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { mq, Theme } from '@libs/theme';
import { PATH_FORGOT_PASSWORD, PATH_HOME, PATH_SIGNUP } from '@routes';

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
      height='100%'
      justifyContent='left'
      alignItems='center'
      css={{
        [mq[2]]: {
          alignItems: 'flex-start',
        },
      }}
    >
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
      />
      <img
        src={BackgroundAstronautPrimary}
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
        <FlexBox width='320px' direction='column'>
          <FlexBox direction='row' width='100%'>
            <Link to={PATH_HOME}>
              <img src={IconArrowLeft} alt='go home' />
            </Link>
            <UnderlineTitle title='로그인' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
          </FlexBox>
          <LoginForm />
          <FlexBox justifyContent='space-around' css={{ padding: '0px 26px', marginBottom: '24px' }}>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <GithubLoginButton />
          </FlexBox>
          <FlexBox direction='column' alignItems='center'>
            <Typography
              css={{
                fontSize: '16px',
                marginBottom: '8px',
              }}
            >
              계정이 없으신가요? &nbsp;
              <Link
                to={PATH_SIGNUP}
                css={(theme: Theme) => [
                  {
                    color: theme.palette.primary.main,
                  },
                ]}
              >
                회원가입
              </Link>
            </Typography>
            <Typography
              css={{
                fontSize: '14px',
              }}
            >
              <Link to={`${PATH_FORGOT_PASSWORD}?step=1`}>비밀번호 찾기</Link>
            </Typography>
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { LoginScreen };
