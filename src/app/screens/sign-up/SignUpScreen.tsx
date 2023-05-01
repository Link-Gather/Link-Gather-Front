import React from 'react';
import { Link } from 'react-router-dom';
import { UnderlineTitle, RequestButton, Input, Button, ShadowBox } from '@elements';
import palette from '@libs/theme/palettes/default';
import { mq } from '@libs/theme';
import { IconArrowLeft } from '@assets/images';
import { Stack } from '@mui/material';

function SignUpScreen() {
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
      <ShadowBox
        css={{
          width: '566px',
          margin: '0 auto',
          padding: '40px',
        }}
      >
        <Stack width='320px' direction='column' css={{ minWidth: '320px', height: '500px', gap: '40px' }}>
          <Link
            to='/'
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <IconArrowLeft css={{ width: '24px', height: '24px' }} />
          </Link>
          <UnderlineTitle title='회원가입' />
          <Stack direction='row' width='100%' css={{ marginTop: '20px' }}>
            <Input placeholder='이메일' width='100%' height='50px' />
            <RequestButton onClick={() => {}}>인증요청</RequestButton>
          </Stack>
          <Stack direction='row' width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='코드입력' width='100%' height='50px' />
            <RequestButton onClick={() => {}}>확인</RequestButton>
          </Stack>
          <Stack direction='row' width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='비밀번호 입력' height='50px' width='369px' />
          </Stack>
          <Stack direction='row' width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='비밀번호 확인' height='50px' width='369px' />
          </Stack>
          <Button
            css={{
              width: '320px',
              height: '48px',
              fontSize: '20px',
              color: palette.contrastText,
              backgroundColor: palette.secondary.n40,
              margin: '0 auto',
              marginTop: '60px',
            }}
            // TODO: 회원가입 API 연동
          >
            다음
          </Button>
        </Stack>
      </ShadowBox>
    </Stack>
  );
}

export { SignUpScreen };
