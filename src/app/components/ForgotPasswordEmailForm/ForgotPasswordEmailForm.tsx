import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FlexBox, UnderlineTitle, Input, Button, Typography } from '@elements';
import { PATH_LOGIN } from '@routes';
import palette from '@libs/theme/palettes';
import { SCHEMA_EMAIL } from '@libs/schema';
import { IconArrowRight, IconArrowLeft, IconCheckGreen, IconSendEmail } from '@assets/images';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';

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
    <FlexBox width='320px' height='324px' direction='column'>
      <FlexBox direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <img src={IconArrowLeft} alt='go back' draggable={false} />
        </Link>
        <UnderlineTitle title='비밀번호 찾기' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </FlexBox>
      <FlexBox direction='column' justifyContent='space-between' css={{ flex: 1 }}>
        <Input
          type='email'
          placeholder='이메일'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.email}
          message={{ error: errors.email?.message }}
          iconProps={{ iconImage: (isValid && IconCheckGreen) || undefined, alt: (isValid && 'valid email') || '' }}
          {...register('email')}
        />
        {isSuccess && (
          <FlexBox direction='column' alignItems='center' justifyContent='center' width='100%'>
            <img src={IconSendEmail} alt='send email' />
            <Typography
              css={{
                fontSize: '12px',
                fontWeight: '700',
                lineHeight: '34px',
                color: palette.black.main,
                marginTop: '16px',
              }}
            >
              비밀번호 재설정 메일을 발송했어요!
            </Typography>
          </FlexBox>
        )}
        <Button
          color={palette.contrastText}
          css={{
            width: '100%',
            height: '48px',
            fontSize: '20px',
            backgroundColor: palette.primary.main,
            borderRadius: '32px',
            marginTop: '24px',
          }}
          disabled={!isValid}
          isLoading={isLoading}
          onClick={handleSubmit(async ({ email }) => await mutateAsync({ email, type: 'password' }))}
        >
          인증하기 <img src={IconArrowRight} alt='go next' draggable={false} />
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { ForgotPasswordEmailForm };
