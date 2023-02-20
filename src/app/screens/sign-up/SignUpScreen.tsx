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
      justifyContent='center'
      css={(theme: Theme) => [
        {
          position: 'relative',
          overflow: 'hidden',
        },
      ]}
    >
      <ImageBox
        position='absolute'
        top='270px'
        left='50%'
        width='128px'
        height='210px'
        backgroundImage={BackgroundAstronaut1}
        zIndex='1'
        css={{
          marginLeft: '-466px',
        }}
      ></ImageBox>
      <ImageBox
        position='absolute'
        top='388px'
        left='50%'
        width='850px'
        height='850px'
        backgroundImage={BackgroundPlanet1}
        zIndex='0'
        css={{
          marginLeft: '-884px',
        }}
      ></ImageBox>
      <ImageBox
        position='absolute'
        top='-56px'
        width='418px'
        height='418px'
        backgroundImage={BackgroundPlanet2}
        zIndex='0'
        css={{
          left: 'calc(387px + 50%)',
          minWidth: '250px',
          transform: 'rotate(245deg)',
          [mq[0]]: {
            left: 'calc(283px + 55.2%)',
          },
        }}
      ></ImageBox>
      <ShadowBox
        padding='40px'
        css={{
          width: '566px',
          marginTop: '170px',
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
            <Input placeholder='비밀번호 입력' height={50} width='369px' />
          </FlexBox>
          <FlexBox width='100%' marginTop='-20px'>
            <Input placeholder='비밀번호 확인' height={50} width='369px' />
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
