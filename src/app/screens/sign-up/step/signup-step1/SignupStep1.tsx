import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FlexBox, RequestButton, Input, Button } from '@elements';
import { useForm } from 'react-hook-form';
import palette from '@libs/theme/palettes';
import { VALIDATION_PATTERN } from '@libs/constants';
import { useState } from 'react';

interface ValidationSignup {
  email: string;
  code: string;
  password: string;
  confirmPassword: string;
}
interface MessageType {
  emailMessage: string;
  codeMessage: string;
  confirmPasswordMessage: string;
}
interface prevValueType {
  prevEmailValue: string;
  prevCodeValue: string;
}

const SignupStep1 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [message, setMessage] = useState<MessageType>({
    emailMessage: '',
    codeMessage: '',
    confirmPasswordMessage: '',
  });
  const [prevValue, setPrevValue] = useState<prevValueType>({
    prevEmailValue: '',
    prevCodeValue: '',
  });
  // form hooks
  const schema = yup.object().shape({
    email: yup.string(),
    code: yup.string(),
    password: yup.string().matches(VALIDATION_PATTERN.password),
    confirmPassword: yup.string().oneOf([yup.ref('password'), '']),
  });

  const {
    register,
    getValues,
    watch,
    formState: { errors, dirtyFields, isValid },
  } = useForm<ValidationSignup>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      code: '',
      password: '',
      confirmPassword: '',
    },
  });
  const loginFormSubmit = (): void => {
    // TODO : 회원가입 API
    const values = getValues('email');
  };
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox justifyContent='center' css={{ width: '100%' }}>
      <FlexBox direction='column' css={{ marginTop: '25px' }}>
        <FlexBox>
          <Input
            type='email'
            placeholder='이메일'
            message={prevValue.prevEmailValue === getValues('email') ? message.emailMessage : ''}
            inputStatus={getValues('email') ? 'active' : 'inActive'}
            css={{ width: '288px', marginBottom: '16px' }}
            {...register('email')}
          />
          <RequestButton
            value={watch('email')}
            onClick={() => {
              setMessage({
                ...message,
                emailMessage: '인증번호를 전송하였습니다.',
              });
              setPrevValue({ ...prevValue, prevEmailValue: watch('email') });
            }}
          >
            인증요청
          </RequestButton>
        </FlexBox>
        <FlexBox>
          <Input
            type='text'
            placeholder='코드입력'
            maxLength={6}
            message={prevValue.prevCodeValue === getValues('code') ? message.codeMessage : ''}
            inputStatus={dirtyFields.code ? 'active' : 'inActive'}
            css={{ width: '288px', marginBottom: '16px' }}
            {...register('code')}
          />
          <RequestButton
            value={watch('code')}
            onClick={() => {
              setMessage({
                ...message,
                codeMessage: '인증이 완료되었습니다.',
              });
              setPrevValue({ ...prevValue, prevCodeValue: watch('code') });
            }}
          >
            확인
          </RequestButton>
        </FlexBox>
        <FlexBox>
          <Input
            type='password'
            placeholder='비밀번호 입력'
            message='영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
            autoComplete='off'
            inputStatus={!dirtyFields.password ? 'inActive' : errors.password || !isValid ? 'error' : 'active'}
            css={{ width: '100%', marginBottom: '16px' }}
            {...register('password')}
          />
        </FlexBox>
        <FlexBox>
          <Input
            type='password'
            placeholder='비밀번호 확인'
            autoComplete='off'
            inputStatus={
              !dirtyFields.confirmPassword ? 'inActive' : errors.confirmPassword || !isValid ? 'error' : 'active'
            }
            message={
              !dirtyFields.confirmPassword
                ? ''
                : errors.confirmPassword
                ? '비밀번호가 일치하지 않습니다.'
                : '비밀번호가 일치합니다.'
            }
            css={{ width: '100%', marginBottom: '16px' }}
            {...register('confirmPassword')}
          />
        </FlexBox>
      </FlexBox>
      <Button
        onClick={moveNextStep}
        css={{
          color: palette.contrastText,
          position: 'absolute',
          bottom: '40px',
          borderRadius: '32px',
          backgroundColor: palette.primary.main,
          width: '320px',
          height: '48px',
          fontSize: '20px',
          fontWeight: '600',
          letterSpacing: '0.6px',
        }}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep1 };
