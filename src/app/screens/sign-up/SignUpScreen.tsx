import palette from '@libs/theme/palettes/default';
import { ShadowBox } from '@components';
import FirstStep from './step/FirstStep';
import SecondStep from './step/SecondStep';
import ThirdStep from './step/ThirdStep';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import BackgroundAstronaut1 from '@assets/images/backgrounds/signup/background-astronaut1.svg';
import BackgroundPlanet1 from '@assets/images/backgrounds/signup/background-planet1.svg';
import BackgroundPlanet2 from '@assets/images/backgrounds/signup/background-planet2.svg';
import { FlexBox, UnderlineTitle, ImageBox, Button } from '@elements';
import { type Theme, mq } from '@libs/theme';
import { useState } from 'react';

function SignUpScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [step, setStep] = useState<number>(0);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  const submitHandler = () => {
    if (step < 2) {
      setStep((prevState) => prevState + 1);
    }
  };

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
        position='fixed'
      ></ImageBox>
      <ImageBox
        top='40%'
        left='10%'
        width='700px'
        height='40rem'
        backgroundImage={BackgroundPlanet1}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <ImageBox
        left='70%'
        top='-1.9%'
        width='300px'
        height='500px'
        backgroundImage={BackgroundPlanet2}
        zIndex='0'
        position='fixed'
      ></ImageBox>
      <ShadowBox
        padding='40px'
        css={{
          width: '566px',
          margin: '0 auto',
        }}
      >
        <FlexBox
          width='100%'
          direction='column'
          css={{ minWidth: '320px', height: step === 0 ? '600px' : '500px', gap: '25px' }}
        >
          <FlexBox
            css={{
              position: 'absolute',
              top: '40px',
              left: '40px',
              cursor: 'pointer',
            }}
          >
            <img
              src={IconArrowLeft}
              alt='go back'
              onClick={() => {
                setStep((prevState) => (prevState !== 0 ? prevState - 1 : 0));
              }}
            />
          </FlexBox>
          <UnderlineTitle title='회원가입' />
          <FlexBox width='369px' height='100%' css={{ margin: '0 auto' }}>
            {/* {step === 0 ? <FirstStep /> : step === 1 ? <SecondStep /> : <ThirdStep />} */}
            <ThirdStep />
          </FlexBox>
          <Button
            onClick={submitHandler}
            color={palette.contrastText}
            backgroundColor={palette.primary.main}
            width={320}
            height={48}
            fontSize={20}
            css={{ margin: '0 auto', marginTop: '-130px' }}
          >
            다음
          </Button>
        </FlexBox>
      </ShadowBox>
    </FlexBox>
  );
}

export { SignUpScreen };
