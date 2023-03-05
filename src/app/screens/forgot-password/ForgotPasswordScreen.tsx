import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { ShadowBox } from '@components';
import BackgroundPlanetPrimary from '@assets/images/backgrounds/background-planet-primary.svg';
import BackgroundAstronautYellow from '@assets/images/backgrounds/background-astronaut-yellow.svg';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { type Theme, mq } from '@libs/theme';
import palette from '@libs/theme/palettes';
import { ROUTE_PATHS } from '@routes';

function ForgotPasswordScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const { search } = useLocation();
  const step = Number(new URLSearchParams(search).get('step'));

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
        <FlexBox width={320} direction='column' css={{ minWidth: '320px', gap: '40px' }}>
          <Link
            to={ROUTE_PATHS.logIn}
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <img src={IconArrowLeft} alt='go back' />
          </Link>
          <UnderlineTitle title={step < 2 ? '비밀번호 찾기' : '비밀번호 재설정'} />
          <form>
            <FlexBox direction='column' spacing={4}>
              {step < 2 && <Input type='email' width='100%' height={50} placeholder='이메일' />}
              {step === 2 && (
                <>
                  <Input type='password' width='100%' height={50} placeholder='비밀번호' />
                  <Input type='password' width='100%' height={50} placeholder='비밀번호 확인' />
                </>
              )}
              {step < 2 ? (
                <Button
                  width='100%'
                  height={48}
                  fontSize={20}
                  color={palette.contrastText}
                  backgroundColor={palette.primary.main}
                  onClick={() => console.log('forgot password')}
                  css={{
                    marginTop: 24,
                  }}
                  disabled
                >
                  인증하기 <img src={IconArrowRight} alt='go next' />
                </Button>
              ) : (
                <Button
                  width='100%'
                  height={48}
                  fontSize={20}
                  color={palette.contrastText}
                  backgroundColor={palette.primary.main}
                  onClick={() => console.log('forgot password')}
                  css={{
                    marginTop: 24,
                  }}
                  disabled
                >
                  비밀번호 변경하기
                </Button>
              )}
            </FlexBox>
          </form>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { ForgotPasswordScreen };
