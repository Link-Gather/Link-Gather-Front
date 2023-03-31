import React from 'react';
import { Link } from 'react-router-dom';
import palette from '@libs/theme/palettes/default';

import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox, UnderlineTitle, RequestButton, ImageBox, Input, Button, ShadowBox } from '@elements';
import { mq } from '@libs/theme';

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
    <FlexBox
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
      <ImageBox
        top='28%'
        left='27%'
        width='100px'
        height='10rem'
        backgroundImage={BackgroundAstronaut1}
        zIndex='1'
      ></ImageBox>
      <ImageBox
        top='40%'
        left='10%'
        width='700px'
        height='40rem'
        backgroundImage={BackgroundPlanet1}
        zIndex='0'
      ></ImageBox>
      <ImageBox
        left='70%'
        top='-1.9%'
        width='300px'
        height='500px'
        backgroundImage={BackgroundPlanet2}
        zIndex='0'
      ></ImageBox>
      <ShadowBox
        css={{
          width: '566px',
          margin: '0 auto',
          padding: '40px',
        }}
      >
        <FlexBox width='320px' direction='column' css={{ minWidth: '320px', height: '500px', gap: '40px' }}>
          <Link
            to='/'
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
            }}
          >
            <img src={IconArrowLeft} alt='go back' />
          </Link>
          <UnderlineTitle title='회원가입' />
          <FlexBox width='100%' css={{ marginTop: '20px' }}>
            <Input placeholder='이메일' width='100%' height='50px' />
            <RequestButton onClick={() => console.log('request')}>인증요청</RequestButton>
          </FlexBox>
          <FlexBox width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='코드입력' width='100%' height='50px' />
            <RequestButton onClick={() => console.log('request')}>확인</RequestButton>
          </FlexBox>
          <FlexBox width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='비밀번호 입력' height='50px' width='369px' />
          </FlexBox>
          <FlexBox width='100%' css={{ marginTop: '-20px' }}>
            <Input placeholder='비밀번호 확인' height='50px' width='369px' />
          </FlexBox>
          <Button
            onClick={() => {
              // TODO : 회원가입 다음단계 이동
              console.log('go to next step');
            }}
            css={{
              width: '320px',
              height: '48px',
              fontSize: '20px',
              color: palette.contrastText,
              backgroundColor: palette.secondary.n40,
              margin: '0 auto',
              marginTop: '60px',
            }}
          >
            다음
          </Button>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
