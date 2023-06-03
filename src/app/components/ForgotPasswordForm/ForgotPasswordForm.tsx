import { IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Button, UnderlineTitle } from '@elements';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_PASSWORD } from '@libs/schema';
import { useMutation } from '@libs/query';
import { authRepository } from '@repositories';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { PATH_LOGIN } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

const schema = yup
  .object({
    password: SCHEMA_PASSWORD.required(),
    passwordConfirm: SCHEMA_PASSWORD.required(),
  })
  .required();

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [isShowingConfirmPassword, setIsShowingConfirmPassword] = useState(false);
  const [isSamePassword, setIsSamePassword] = useState(true);

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
  const { mutateAsync } = useMutation(authRepository.changePassword, {
    onCompleted: () => navigator(PATH_LOGIN),
  });

  // calculated values
  const verificationId = searchParams.get('verificationId') || '';

  // effects
  // handlers
  return (
    <Stack css={{ width: '320px', height: '324px' }}>
      <Stack direction='row'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)' }} />
      </Stack>
      <Stack css={{ marginTop: '40px' }}>
        <TextField
          {...register('password')}
          type={isShowingPassword ? 'text' : 'password'}
          placeholder='비밀번호'
          error={!!errors.password}
          helperText='8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <IconButton onClick={() => setIsShowingPassword(!isShowingPassword)}>
                  {isShowingPassword ? (
                    <IconPasswordShow css={{ width: '24px', height: '24px' }} />
                  ) : (
                    <IconPasswordHide css={{ width: '24px', height: '24px' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />

        <TextField
          {...register('passwordConfirm')}
          type={isShowingConfirmPassword ? 'text' : 'password'}
          placeholder='비밀번호 재확인'
          error={!!errors.passwordConfirm || !isSamePassword}
          helperText={!isSamePassword && '비밀번호가 일치하지 않습니다.'}
          css={{ marginTop: '14px' }}
          InputProps={{
            endAdornment: (
              <InputAdornment position='start'>
                <IconButton onClick={() => setIsShowingConfirmPassword(!isShowingConfirmPassword)}>
                  {isShowingConfirmPassword ? (
                    <IconPasswordShow css={{ width: '24px', height: '24px' }} />
                  ) : (
                    <IconPasswordHide css={{ width: '24px', height: '24px' }} />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <Button
        variant='filled'
        disabled={!isValid || !isDirty}
        onClick={handleSubmit(async ({ password, passwordConfirm }) => {
          if (password !== passwordConfirm) {
            setIsSamePassword(false);
            return;
          }

          await mutateAsync({ password, passwordConfirm, verificationId });
        })}
        css={{ width: '100%', padding: '10px 0', marginTop: '48px', borderRadius: '32px' }}
      >
        <Typography css={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.4, color: '#FFF' }}>
          비밀번호 변경
        </Typography>
      </Button>
    </Stack>
  );
}

export { ForgotPasswordForm };
