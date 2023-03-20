import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FlexBox, RequestButton, Input, Button } from '@elements';
import { useForm, useFormState } from 'react-hook-form';
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
  authRequestMessage: string;
  codeConfirmMessage: string;
}

const SignupStep1 = ({ moveNextStep }: { moveNextStep: () => void }) => {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [message, setMessage] = useState<MessageType>({
    authRequestMessage: '',
    codeConfirmMessage: '',
  });
  // form hooks
  const schema = yup.object().shape({
    email: yup.string(),
    code: yup.string(),
    password: yup
      .string()
      .matches(VALIDATION_PATTERN.password, '영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.')
      .required('비밀번호를 다시 확인해주세요.'),
    confirmPassword: yup.string().oneOf([yup.ref('password'), ''], '비밀번호가 일치하지 않습니다'),
  });

  const {
    register,
    getValues,
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
  const loginFormSubmit = () => {
    // TODO : 회원가입 API
    const values = getValues('email');
    console.log(values);
  };
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox position='relative' justifyContent='center' css={{ width: '100%' }}>
      <FlexBox direction='column' marginTop='25px'>
        <FlexBox>
          <Input
            type='email'
            placeholder='이메일'
            message={message.authRequestMessage}
            inputStatus={dirtyFields.email ? 'active' : 'inActive'}
            css={{ width: '288px', marginBottom: '16px' }}
            {...register('email')}
          />
          <RequestButton
            value={getValues('email')}
            onClick={() => {
              console.log('d');
              setMessage({
                ...message,
                authRequestMessage: '인증번호를 전송하였습니다.',
              });
            }}
          >
            인증요청
          </RequestButton>
        </FlexBox>
        <FlexBox>
          <Input
            type='text'
            placeholder='코드입력'
            message={message.codeConfirmMessage}
            inputStatus={dirtyFields.code ? 'active' : 'inActive'}
            css={{ width: '288px', marginBottom: '16px' }}
            {...register('code')}
          />
          <RequestButton
            value={getValues('code')}
            onClick={() => {
              setMessage({
                ...message,
                codeConfirmMessage: '인증이 완료되었습니다.',
              });
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
            inputStatus={errors.password ? 'error' : dirtyFields.password ? 'active' : 'inActive'}
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
            css={{ width: '100%', marginBottom: '16px' }}
            {...register('confirmPassword')}
          />
        </FlexBox>
      </FlexBox>
      <Button
        // onClick={moveNextStep}
        // disabled={
        //   !isValid ||
        //   !getValues('email') ||
        //   !getValues('code') ||
        //   !getValues('password') ||
        //   !getValues('confirmPassword')
        // }
        onClick={moveNextStep}
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        width='320px'
        height='48px'
        fontSize='20px'
        css={{ position: 'absolute', bottom: '40px', borderRadius: '32px' }}
      >
        다음
      </Button>
    </FlexBox>
  );
};

export { SignupStep1 };
