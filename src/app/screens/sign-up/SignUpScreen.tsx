import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import palette from '@libs/theme/palettes/default';
import { ShadowBox } from '@components';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox, UnderlineTitle, RequestButton, ImageBox, Input, Button } from '@elements';
import { type Theme, mq } from '@libs/theme';

function SignUpScreen(props: {}) {
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
      css={(theme: Theme) => [
        {
          backgroundColor: '#2E558E',
          [mq[2]]: {
            alignItems: 'flex-start',
            paddingTop: '40px',
          },
        },
      ]}
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
        padding='40px'
        css={{
          width: '566px',
          margin: '0 auto',
        }}
      >
        <FlexBox width='320' direction='column' css={{ minWidth: '320px', height: '500px', gap: '40px' }}>
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
          <FlexBox width='100%' marginTop='20px'>
            <Input placeholder='이메일' width='100%' height={50} />
            <RequestButton onClick={() => console.log('request')}>인증요청</RequestButton>
          </FlexBox>
          <FlexBox width='100%' marginTop='-20px'>
            <Input placeholder='코드입력' width='100%' height={50} />
            <RequestButton onClick={() => console.log('request')}>확인</RequestButton>
          </FlexBox>
          <FlexBox width='100%' marginTop='-20px'>
            <Input type='password' placeholder='비밀번호 입력' height={50} width='369px' />
          </FlexBox>
          <FlexBox width='100%' marginTop='-20px'>
            <Input type='password' placeholder='비밀번호 확인' height={50} width='369px' />
          </FlexBox>
          <Button
            onClick={() => {
              console.log('d');
            }}
            color={palette.contrastText}
            backgroundColor={palette.secondary.n40}
            width={320}
            height={48}
            fontSize={20}
            css={{ margin: '0 auto', marginTop: '60px' }}
          >
            다음
          </Button>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
