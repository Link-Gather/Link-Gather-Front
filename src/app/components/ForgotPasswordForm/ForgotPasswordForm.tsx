import { InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { Button, UnderlineTitle, VisibilityIconButton } from '@elements';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { SCHEMA_CONFIRM_PASSWORD, SCHEMA_PASSWORD } from '@libs/schema';
import { useMutation, useQuery } from '@libs/query';
import { authRepository } from '@repositories';
import { PATH_FORGOT_PASSWORD, PATH_LOGIN } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';

const schema = yup
  .object({
    password: SCHEMA_PASSWORD.required(),
    passwordConfirm: SCHEMA_CONFIRM_PASSWORD.required('비밀번호를 입력해주세요.'),
  })
  .required();

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  const navigator = useNavigate();
  const [searchParams] = useSearchParams();
  const [isShowingPassword, setIsShowingPassword] = useState(false);
  const [isShowingConfirmPassword, setIsShowingConfirmPassword] = useState(false);

  // state, ref, querystring hooks
  // form hooks
  const {
    register,
    handleSubmit,
    getValues,
    setError,
    formState: { errors, isValid, isDirty },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    defaultValues: {
      password: '',
      passwordConfirm: '',
    },
    resolver: yupResolver(schema),
  });

  // query hooks
  const { mutateAsync: changePassword } = useMutation(authRepository.changePassword, {
    onCompleted: () => navigator(PATH_LOGIN),
    onError: (err) => setError('passwordConfirm', { message: err.message }),
  });
  const { data } = useQuery(authRepository.verifyVerificationId, {
    variables: { id: searchParams.get('verificationId') || '' },
    onError: (err) => {
      // TODO: 상단에 스낵바..?
      alert('유효하지 않은 인증번호입니다.');
      navigator(`${PATH_FORGOT_PASSWORD}?step=email`);
    },
  });

  // calculated values
  const verificationId = searchParams.get('verificationId') || '';

  // effects
  // handlers
  return (
    <Stack css={{ width: '320px', height: '324px', justifyContent: 'space-between' }}>
      <Stack>
        <Stack direction='row'>
          <Link to={PATH_LOGIN}>
            <IconArrowLeft css={{ width: '32px', height: '32px' }} />
          </Link>
          <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)' }} />
        </Stack>
        <Stack css={{ marginTop: '40px' }}>
          <TextField
            {...register('password')}
            defaultValue={getValues('password')}
            type={isShowingPassword ? 'text' : 'password'}
            placeholder='비밀번호'
            error={!!errors.password}
            helperText='8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <VisibilityIconButton
                    isShow={isShowingPassword}
                    onClick={() => setIsShowingPassword(!isShowingPassword)}
                  />
                </InputAdornment>
              ),
            }}
          />

          <TextField
            {...register('passwordConfirm')}
            defaultValue={getValues('passwordConfirm')}
            type={isShowingConfirmPassword ? 'text' : 'password'}
            placeholder='비밀번호 재확인'
            error={!!errors.passwordConfirm}
            helperText={errors.passwordConfirm?.message}
            css={{ marginTop: '14px' }}
            InputProps={{
              endAdornment: (
                <InputAdornment position='start'>
                  <VisibilityIconButton
                    isShow={isShowingConfirmPassword}
                    onClick={() => setIsShowingConfirmPassword(!isShowingConfirmPassword)}
                  />
                </InputAdornment>
              ),
            }}
          />
        </Stack>
      </Stack>
      <Button
        variant='filled'
        disabled={!isValid || !isDirty}
        onClick={handleSubmit(async ({ password, passwordConfirm }) => {
          await changePassword({ password, passwordConfirm, verificationId });
        })}
        css={{ width: '100%', padding: '10px 0', borderRadius: '32px' }}
      >
        <Typography css={{ fontSize: '20px', fontWeight: 800, lineHeight: 1.4, color: '#FFF' }}>
          비밀번호 변경
        </Typography>
      </Button>
    </Stack>
  );
}

export { ForgotPasswordForm };
