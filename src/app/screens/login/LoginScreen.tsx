import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  FlexBox,
  GitHubLoginButton,
  GoogleLoginButton,
  Input,
  KakaoLoginButton,
  UnderlineTitle,
} from '@elements';
import BackgroundLoginOne from '@assets/images/backgroundLogin1.svg';
import { ShadowBox } from '@components';
import type { Theme } from '@libs/theme';
import palette from '@libs/theme/palettes';

// TODO: SW-56에서 구현 예정. 현재는 oauth 연결을 위해 만들어 놓음
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
      height='100vh'
      justifyContent='center'
      alignItems='center'
      css={(theme: Theme) => [
        {
          backgroundColor: theme.palette.secondary.n20,
          backgroundImage: `url(${BackgroundLoginOne})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'calc(50% - 320px) 165px',
        },
      ]}
    >
      <ShadowBox padding='40px' margin='0 0 0 550px'>
        <FlexBox width={320} direction='column' css={{ gap: '40px' }}>
          <UnderlineTitle title='로그인' />
          <FlexBox direction='column' spacing={4}>
            <Input width='100%' height={50} placeholder='이메일' />
            <Input width='100%' height={50} placeholder='비밀번호' />
            <Button
              width='100%'
              height={48}
              fontSize={20}
              color={palette.contrastText}
              backgroundColor={palette.secondary.n40}
              onClick={() => console.log('login')}
              css={{
                marginTop: 24,
              }}
            >
              로그인
            </Button>
          </FlexBox>
          <FlexBox justifyContent='space-around' css={{ padding: '0 26px' }}>
            <KakaoLoginButton />
            <GoogleLoginButton />
            <GitHubLoginButton />
          </FlexBox>
          <FlexBox direction='column' alignItems='center'>
            <p
              css={(theme: Theme) => [
                {
                  fontSize: 16,
                  fontWeight: 500,
                  color: theme.palette.secondary.n300,
                  lineHeight: '24px',
                  marginBottom: 8,
                },
              ]}
              className='notosans'
            >
              계정이 없으신가요?{' '}
              <Link
                to={''}
                css={(theme: Theme) => [
                  {
                    fontSize: 16,
                    fontWeight: 500,
                    color: theme.palette.primary.main,
                  },
                ]}
                className='notosans'
              >
                회원가입
              </Link>
            </p>
            <Link
              to={''}
              css={(theme: Theme) => [
                {
                  fontSize: 14,
                  fontWeight: 500,
                  color: theme.palette.secondary.n300,
                  lineHeight: '24px',
                },
              ]}
              className='notosans'
            >
              비밀번호 찾기
            </Link>
          </FlexBox>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { LoginScreen };
