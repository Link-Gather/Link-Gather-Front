import React, { useState } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import { SCHEMA_CONFIRM_PASSWORD, SCHEMA_PASSWORD } from '@libs/schema';
import { IconArrowLeft, IconPasswordHide, IconPasswordShow } from '@assets/images';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';
import { Stack } from '@mui/material';
import type { Theme } from '@libs/theme';

const schema = yup.object({
  password: SCHEMA_PASSWORD.required('비밀번호를 다시 확인해주세요.'),
  confirmPassword: SCHEMA_CONFIRM_PASSWORD.required('비밀번호를 입력해주세요'),
});

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  // state, ref, querystring hooks
  const verificationId = searchParams.get('verificationId') ?? '';

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, dirtyFields },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  // query hooks
  const { mutateAsync, isLoading, isSuccess } = useMutation(authRepository.passwordChange);

  // calculated values

  // effects

  // handlers

  if (isSuccess) navigate(PATH_LOGIN);
  return (
    <Stack width='320px' height='324px' direction='column'>
      <Stack direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </Stack>
      <Stack direction='column'>
        <Input
          type={!isShowPassword ? 'password' : 'text'}
          placeholder='비밀번호'
          css={{ width: '100%', height: '88px', marginBottom: '16px' }}
          error={errors.password}
          message={
            errors.password?.message ?? '8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
          }
          IconProps={{
            onClick: () => setIsShowPassword(!isShowPassword),
            Icon:
              dirtyFields.password && !isShowPassword ? (
                <IconPasswordHide css={{ width: '24px', height: '24px' }} />
              ) : (
                <IconPasswordShow css={{ width: '24px', height: '24px' }} />
              ),
          }}
          {...register('password')}
        />
        <Input
          type={!isShowConfirmPassword ? 'password' : 'text'}
          placeholder='비밀번호 확인'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.confirmPassword}
          message={errors.confirmPassword?.message}
          IconProps={{
            onClick: () => setIsShowConfirmPassword(!isShowConfirmPassword),
            Icon:
              dirtyFields.confirmPassword && !isShowConfirmPassword ? (
                <IconPasswordHide css={{ width: '24px', height: '24px' }} />
              ) : (
                <IconPasswordShow css={{ width: '24px', height: '24px' }} />
              ),
          }}
          {...register('confirmPassword')}
        />
        <Button
          onClick={handleSubmit(async ({ password, confirmPassword }) => {
            await mutateAsync({ id: verificationId, password, passwordConfirm: confirmPassword });
          })}
          css={(theme: Theme) => ({
            width: '100%',
            height: '48px',
            fontSize: '20px',
            color: theme.palette.contrastText,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '32px',
            marginTop: '14px',
          })}
          isLoading={isLoading}
          disabled={!isValid}
        >
          비밀번호 변경
        </Button>
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordForm };
