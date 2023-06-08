import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UnderlineTitle, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import { SCHEMA_EMAIL } from '@libs/schema';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconSendEmail from '@assets/images/icons/icon-send-email.svg';
import { Stack, TextField, Typography } from '@mui/material';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';

const schema = yup
  .object({
    email: SCHEMA_EMAIL.required('이메일을 입력해주세요.'),
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
    getValues,
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
  const {
    mutateAsync: verifyEmail,
    isLoading,
    isSuccess,
    isError,
  } = useMutation(authRepository.verifyEmail, {
    onError: (error) => setErrorMessage(error.message),
  });

  // calculated values
  // effects
  // handlers

  return (
    <Stack direction='column' css={{ width: '320px', height: '324px' }}>
      <Stack direction='row'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 찾기' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </Stack>
      <Stack direction='column' css={{ flex: 1, justifyContent: 'space-between' }}>
        <Stack>
          <TextField
            {...register('email')}
            defaultValue={getValues('email')}
            type='email'
            placeholder='이메일'
            helperText={errorMessage}
            error={!!errors.email || isError}
          />

          {isSuccess && (
            <Stack css={{ marginTop: '24px' }}>
              <IconSendEmail css={{ width: '120px', height: '44px', marginLeft: '78px' }} />
              <Typography css={{ marginTop: '20px', fontSize: '12px', fontWeight: 700, textAlign: 'center' }}>
                비밀번호 재설정 메일을 발송했어요!
              </Typography>
            </Stack>
          )}
        </Stack>

        <Button
          variant='filled'
          loading={isLoading}
          css={{
            height: '48px',
            fontSize: '20px',
            borderRadius: '32px',
          }}
          disabled={!isValid}
          onClick={handleSubmit(async ({ email }) => {
            setErrorMessage('');
            await verifyEmail({ email, type: 'password' });
          })}
        >
          <Stack direction='row' css={{ alignItems: 'center' }}>
            <Typography css={{ fontSize: '20px', fontWeight: 800, linetHeight: 1.4, color: '#FFF' }}>
              인증하기
            </Typography>
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordEmailForm };
