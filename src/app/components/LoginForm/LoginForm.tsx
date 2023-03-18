import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Button, Input, FlexBox } from '@elements';
import palette from '@libs/theme/palettes';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';

interface IValidationLogin {
  email?: string;
  password?: string;
}

function LoginForm() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  // form hooks
  const schema = yup.object().shape({
    email: yup
      .string()
      .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, '올바른 이메일 형식을 입력해주세요.')
      .required('이메일을 입력해주세요.'),
    password: yup
      .string()
      .matches(/^(?=.*\d)(?=.*[a-zA-Z])(?=.*\W)(?!.*\s).{8,16}$/, '영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.')
      .required('비밀번호를 다시 확인해주세요.'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<IValidationLogin>({
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
  const handlePasswordVisible = () => {
    setIsShowPassword(!isShowPassword);
  };

  const loginFormSubmit = (data: IValidationLogin) => {
    console.log(data);
  };

  return (
    <FlexBox direction='column' css={{ marginBottom: '40px' }}>
      <Input
        type='email'
        width='100%'
        height='50px'
        placeholder='이메일'
        css={{ marginBottom: '16px' }}
        inputStatus={errors.email ? 'error' : dirtyFields.email ? 'active' : 'inActive'}
        message={errors.email ? errors.email.message : ''}
        {...register('email')}
      >
        {!errors.email ? <img src={IconCheckGreen} alt='checked email' /> : null}
      </Input>
      <Input
        type={isShowPassword ? 'password' : 'text'}
        width='100%'
        height='50px'
        placeholder='비밀번호'
        onClick={handlePasswordVisible}
        css={{ marginBottom: '16px' }}
        inputStatus={errors.password ? 'error' : dirtyFields.password ? 'active' : 'inActive'}
        message={errors.password ? errors.password.message : ''}
        {...register('password')}
      >
        {dirtyFields.password ? (
          <img src={isShowPassword ? IconPasswordHide : IconPasswordShow} alt='checked password' />
        ) : null}
      </Input>
      <Button
        width='100%'
        height='48px'
        fontSize='20px'
        borderRadius='32px'
        color={palette.contrastText}
        backgroundColor={palette.primary.main}
        onClick={handleSubmit(loginFormSubmit)}
        css={{
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
