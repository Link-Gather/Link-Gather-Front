import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, FlexBox } from '@elements';
import palette from '@libs/theme/palettes';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { httpClient } from '@libs/http-client';
import { emailSchema, passwordSchema } from '@libs/schema';

const schema = yup.object({
  email: emailSchema.required('이메일을 입력해주세요.'),
  password: passwordSchema.required('비밀번호를 다시 확인해주세요.'),
});

function LoginForm() {
  // prop destruction
  // lib hooks
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
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox direction='column' css={{ marginBottom: '40px' }}>
      <Input
        type='email'
        placeholder='이메일'
        css={{ width: '100%', marginBottom: '16px' }}
        error={errors.email}
        message={errors.email?.message}
        {...register('email')}
      >
        {!errors.email && <img src={IconCheckGreen} alt='checked email' />}
      </Input>
      <Input
        type={!isShowPassword ? 'password' : 'text'}
        placeholder='비밀번호'
        onClick={() => setIsShowPassword(!isShowPassword)}
        css={{ width: '100%', marginBottom: '16px' }}
        error={errors.password}
        message={errors.password?.message}
        {...register('password')}
      >
        {dirtyFields.password && (
          <img src={!isShowPassword ? IconPasswordHide : IconPasswordShow} alt='checked password' />
        )}
      </Input>
      <Button
        onClick={handleSubmit(async ({ email, password }) => {
          await httpClient.post('/users/sign-in', { email, password });
        })}
        css={{
          width: '100%',
          height: '48px',
          fontSize: '20px',
          borderRadius: '32px',
          color: palette.contrastText,
          backgroundColor: palette.primary.main,
          marginTop: '8px',
        }}
        disabled={!isValid}
      >
        로그인
      </Button>
    </FlexBox>
  );
}

export { LoginForm };
