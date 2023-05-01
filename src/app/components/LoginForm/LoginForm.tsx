import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { Button, Input } from '@elements';
import { SCHEMA_EMAIL, SCHEMA_PASSWORD } from '@libs/schema';
import { userRepository } from '@repositories';
import { useMutation } from '@libs/query';
import { IconCheckGreen, IconPasswordHide, IconPasswordShow } from '@assets/images';
import { useNavigate } from 'react-router-dom';
import { Stack } from '@mui/material';
import { Theme } from '@libs/theme';

const schema = yup.object({
  email: SCHEMA_EMAIL.required('이메일을 입력해주세요.'),
  password: SCHEMA_PASSWORD.required('비밀번호를 다시 확인해주세요.'),
});

function LoginForm() {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  // state, ref hooks
  const [isShowPassword, setIsShowPassword] = useState(false);

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  // query hooks
  const { mutateAsync, isLoading, isSuccess } = useMutation(userRepository.signIn);

  // calculated values
  // effects
  // handlers
  if (isSuccess) {
    navigate('/');
  }
  return (
    <Stack direction='column' css={{ marginBottom: '40px' }}>
      <Input
        type='email'
        placeholder='이메일'
        css={{ width: '100%', marginBottom: '16px' }}
        error={errors.email}
        message={errors.email?.message}
        IconProps={{
          Icon:
            (!errors.email && dirtyFields.email && <IconCheckGreen css={{ width: '24px', height: '24px' }} />) ||
            undefined,
        }}
        {...register('email')}
      />
      <Input
        type={!isShowPassword ? 'password' : 'text'}
        placeholder='비밀번호'
        css={{ width: '100%', height: '88px', marginBottom: '16px' }}
        error={errors.password}
        message={errors.password?.message}
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
      <Button
        onClick={handleSubmit(async ({ email, password }) => await mutateAsync({ email, password }))}
        css={(theme: Theme) => ({
          width: '100%',
          height: '48px',
          fontSize: '20px',
          color: theme.palette.contrastText,
          borderRadius: '32px',
          backgroundColor: theme.palette.primary.main,
        })}
        isLoading={isLoading}
        disabled={!isValid}
      >
        로그인
      </Button>
    </Stack>
  );
}

export { LoginForm };
