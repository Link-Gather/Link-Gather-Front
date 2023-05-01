import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { PATH_LOGIN } from '@routes';
import * as yup from 'yup';
import { SCHEMA_EMAIL } from '@libs/schema';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';
import { UnderlineTitle, Input, Button, Typography } from '@elements';
import { Stack } from '@mui/material';
import { IconArrowRight, IconArrowLeft, IconCheckGreen, IconSendEmail } from '@assets/images';
import type { Theme } from '@libs/theme';

const schema = yup.object({
  email: SCHEMA_EMAIL.required('이메일을 입력해주세요.'),
});

function ForgotPasswordEmailForm() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });

  // query hooks
  const { mutateAsync, isLoading, isSuccess } = useMutation(authRepository.emailVerification);

  // calculated values
  // effects
  // handlers

  return (
    <Stack width='320px' height='324px' direction='column'>
      <Stack direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 찾기' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </Stack>
      <Stack direction='column' justifyContent='space-between' css={{ flex: 1 }}>
        <Input
          type='email'
          placeholder='이메일'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.email}
          message={errors.email?.message}
          IconProps={{ Icon: (isValid && <IconCheckGreen css={{ width: '24px', height: '24px' }} />) || undefined }}
          {...register('email')}
        />
        {isSuccess && (
          <Stack direction='column' alignItems='center' justifyContent='center' width='100%'>
            <IconSendEmail css={{ width: '120px', height: '40px' }} />
            <Typography
              css={(theme) => ({
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '34px',
                color: theme.palette.black.main,
                marginTop: '16px',
              })}
            >
              비밀번호 재설정 메일을 발송했어요!
            </Typography>
          </Stack>
        )}
        <Button
          css={(theme: Theme) => ({
            width: '100%',
            height: '48px',
            fontSize: '20px',
            color: theme.palette.contrastText,
            backgroundColor: theme.palette.primary.main,
            borderRadius: '32px',
            marginTop: '24px',
          })}
          disabled={!isValid}
          isLoading={isLoading}
          onClick={handleSubmit(async ({ email }) => await mutateAsync({ email, type: 'password' }))}
        >
          인증하기 <IconArrowRight css={{ width: '24px', height: '24px' }} />
        </Button>
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordEmailForm };
