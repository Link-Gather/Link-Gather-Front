import { Stack, Typography } from '@mui/material';
import { Button, Input, UnderlineTitle } from '@elements';
import { useSearchParams } from 'react-router-dom';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_PASSWORD } from '@libs/schema';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';

const schema = yup
  .object({
    password: SCHEMA_PASSWORD.required(),
    passwordConfirm: SCHEMA_PASSWORD.required(),
  })
  .required();

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  const [searchParams] = useSearchParams();
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [isShowingConfirmPassword, setIsShowingConfirmPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // state, ref, querystring hooks
  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isDirty },
  } = useForm({
    mode: 'onChange',
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  // query hooks
  const { mutateAsync } = useMutation(authRepository.changePassword, {});
  // calculated values
  const verificationId = searchParams.get('verificationId') || '';

  // effects
  // handlers
  return (
    <Stack css={{ width: '320px', height: '324px', alignItems: 'center' }}>
      <UnderlineTitle title='비밀번호 재설정' />
      <Stack css={{ marginTop: '40px' }}>
        <Input
          {...register('password')}
          type={isShowingPassword ? 'text' : 'password'}
          placeholder='비밀번호'
          error={errors.password}
          helperText='8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
        />
        <Input
          {...register('passwordConfirm')}
          type={isShowingConfirmPassword ? 'text' : 'password'}
          placeholder='비밀번호 재확인'
          error={errors.passwordConfirm}
          css={{ marginTop: '40px' }}
        />
      </Stack>
      <Button
        variant='filled'
        disabled={!isValid || !isDirty}
        onClick={handleSubmit(async ({ password, passwordConfirm }) => {
          if (password !== passwordConfirm) {
            setErrorMessage('비밀번호가 일치하지 않습니다.');
            return;
          }

          await mutateAsync({ password, passwordConfirm, verificationId });
        })}
        css={{ width: '100%', padding: '10px 0', marginTop: '44px', borderRadius: '32px' }}
      >
        <Typography css={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.4, color: '#FFF' }}>
          비밀번호 변경
        </Typography>
      </Button>
    </Stack>
  );
}

export { ForgotPasswordForm };
