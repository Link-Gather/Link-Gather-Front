import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import { SCHEMA_EMAIL } from '@libs/schema';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import { Stack, Typography } from '@mui/material';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';

const schema = yup
  .object({
    email: SCHEMA_EMAIL.required('이메일을 입력해주세요.'),
    type: yup.string().required(),
  })
  .required();

function ForgotPasswordEmailForm() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [errorMessage, setErrorMessage] = React.useState('');

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      type: 'password',
    },
  });

  // query hooks
  const { mutateAsync, isSuccess, isError } = useMutation(authRepository.verifyEmail, {
    onError: (error) => setErrorMessage(error.message),
  });

  // calculated values
  // effects
  // handlers

  return (
    <Stack width='320px' height='324px' direction='column'>
      <Stack direction='row'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 찾기' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </Stack>
      <Stack direction='column' css={{ flex: 1, justifyContent: 'space-between' }}>
        <Input
          type='email'
          placeholder='이메일'
          helperText={errorMessage}
          error={errors.email || isError}
          {...register('email')}
        />

        {isSuccess && <Stack>fda</Stack>}

        <Button
          variant='filled'
          css={{
            height: '48px',
            fontSize: '20px',
            borderRadius: '32px',
            marginTop: '24px',
          }}
          disabled={!isValid}
          onClick={handleSubmit(async ({ email, type }) => await mutateAsync({ email, type }))}
        >
          <Stack direction='row' css={{ alignItems: 'center' }}>
            <Typography css={{ fontSize: '20px', fontWeight: 800, linetHeight: 1.4, color: '#FFF' }}>
              인증하기
            </Typography>
            <IconArrowRight css={{ width: '24px', height: '24px', marginLeft: '8px' }} />
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordEmailForm };
