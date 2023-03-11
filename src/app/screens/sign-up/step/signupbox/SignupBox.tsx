import { useState } from 'react';
import { SignupStep1, SignupStep2, SignupStep3 } from '@screens';
import { Button, FlexBox, UnderlineTitle } from '@elements';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { ShadowBox } from '@components';

const SignupBox = () => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [step, setStep] = useState<number>(0);
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const moveNextStep = (): void => {
    if (step < 2) {
      setStep((prevState) => prevState + 1);
    }
  };
  return (
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
        css={{ minWidth: '320px', height: step === 2 ? '600px' : '500px', gap: '25px' }}
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
          {step === 0 ? (
            <SignupStep1 moveNextStep={moveNextStep} />
          ) : step === 1 ? (
            <SignupStep2 moveNextStep={moveNextStep} />
          ) : (
            <SignupStep3 />
          )}
          {/* <ThirdStep /> */}
        </FlexBox>
      </FlexBox>
    </ShadowBox>
  );
};

export { SignupBox };
