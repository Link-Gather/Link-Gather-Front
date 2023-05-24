import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import palette from '@libs/theme/palettes';
import { SCHEMA_EMAIL } from '@libs/schema';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import { Stack } from '@mui/material';

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
    getValues,
    formState: { errors, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
    },
  });
  // query hooks
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
          defaultValue={getValues('email')}
          error={errors.email}
          helperText={errors.email?.message}
          IconProps={{ EndIcon: (isValid && <IconCheckGreen css={{ width: '24px', height: '24px' }} />) || undefined }}
          {...register('email')}
        />
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
          onClick={handleSubmit(async ({ email }) => {})}
        >
          인증하기 <IconArrowRight css={{ width: '24px', height: '24px' }} />
        </Button>
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordEmailForm };
