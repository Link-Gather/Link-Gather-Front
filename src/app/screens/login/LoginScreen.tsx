import { FlexBox, UnderlineTitle, KakaoLoginButton, GoogleLoginButton, GithubLoginButton, Typography } from '@elements';
import { LoginForm, ShadowBox } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautPrimary from '@assets/images/backgrounds/background-astronaut-primary.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { mq, Theme } from '@libs/theme';
import { ROUTE_PATHS } from '@routes';

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
      alignItems='flex-start'
      css={{
        [mq[2]]: {
          alignItems: 'flex-start',
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
        }}
      >
        <div
          css={{
            position: 'absolute',
            width: '34%',
            height: '100%',
            backgroundImage: `url(${BackgroundAstronautPrimary})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
            backgroundPosition: 'left 10px bottom 420px',

            [mq[0]]: {
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
          marginTop: '262px',
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
        <FlexBox width='320px' direction='column' css={{ minWidth: '320px' }}>
          <a
            href='/'
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <img src={IconArrowLeft} alt='go back' />
          </a>
          <UnderlineTitle title='로그인' css={{ marginBottom: '40px' }} />
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
              <a
                href={ROUTE_PATHS.signUp}
                css={(theme: Theme) => [
                  {
                    color: theme.palette.primary.main,
                  },
                ]}
              >
                회원가입
              </a>
            </Typography>
            <Typography
              css={{
                fontSize: '14px',
              }}
            >
              <a href={`${ROUTE_PATHS.forgotPassword}?step=1`}>비밀번호 찾기</a>
            </Typography>
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { LoginScreen };
