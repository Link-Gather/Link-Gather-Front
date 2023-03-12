import { useState, useCallback, ChangeEvent, useEffect, useRef } from 'react';
import { useSignUp } from '../../useSignUp';
import { FlexBox, RequestButton, Input, Button, type InputStatus } from '@elements';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';

const SignupStep1 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const { label, inputs, onChange, sendCode, passwordValidation, confirmErrorCheck } = useSignUp();
  const { email, code, password, confirmPassword } = inputs;
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox position='relative' direction='column' marginTop='25px' alignItems='center' spacing={2}>
      <FlexBox>
        <Input
          name='email'
          value={email}
          placeholder='이메일'
          width='100%'
          height={50}
          onChange={onChange}
          message={label.firstLabel}
        />
        <RequestButton
          width='94px'
          height='50px'
          fontSize='14px'
          marginLeft='10px'
          onClick={() => {
            sendCode('firstLabel');
          }}
          value={email}
        >
          인증요청
        </RequestButton>
      </FlexBox>
      <FlexBox>
        <Input
          name='code'
          value={code}
          placeholder='코드입력'
          width='100%'
          height={50}
          onChange={onChange}
          message={label.secondLabel}
        />
        <RequestButton
          width='94px'
          height='50px'
          fontSize='14px'
          marginLeft='10px'
          onClick={() => {
            sendCode('secondLabel');
          }}
          value={code}
        >
          확인
        </RequestButton>
      </FlexBox>
      <FlexBox>
        <Input
          name='password'
          value={password}
          type='password'
          placeholder='비밀번호 입력'
          height={50}
          width='369px'
          message='8~16자리, 영문과 숫자로 입력해주세요'
          onChange={onChange}
          autoComplete='off'
        />
      </FlexBox>
      <FlexBox>
        <Input
          name='confirmPassword'
          value={confirmPassword}
          type='password'
          placeholder='비밀번호 확인'
          height={50}
          width='369px'
          onChange={onChange}
          autoComplete='off'
        />
      </FlexBox>
      <Button
        onClick={moveNextStep}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        width={320}
        height={48}
        fontSize={20}
        css={{ position: 'absolute', top: '90%' }}
        // disabled={checkNull() ? false : true}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep1 };
