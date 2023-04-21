import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import { SCHEMA_CONFIRM_PASSWORD, SCHEMA_PASSWORD } from '@libs/schema';
import { IconArrowLeft, IconPasswordHide, IconPasswordShow } from '@assets/images';
import palette from '@libs/theme/palettes';

const schema = yup.object({
  password: SCHEMA_PASSWORD.required('비밀번호를 다시 확인해주세요.'),
  confirmPassword: SCHEMA_CONFIRM_PASSWORD.required('비밀번호를 입력해주세요'),
});

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  const [searchParams] = useSearchParams();

  // state, ref, querystring hooks
  const verificationId = searchParams.get('verificationId');

  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<yup.InferType<typeof schema>>({
    mode: 'onChange',
    resolver: yupResolver(schema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox width='320px' height='324px' direction='column'>
      <FlexBox direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <img src={IconArrowLeft} alt='go back' draggable={false} />
        </Link>
        <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </FlexBox>
      <FlexBox direction='column'>
        <Input
          type={!isShowPassword ? 'password' : 'text'}
          placeholder='비밀번호'
          css={{ width: '100%', height: '88px', marginBottom: '16px' }}
          error={errors.password}
          message={{
            error: errors.password?.message,
            help: '8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.',
          }}
          iconProps={{
            onClick: () => setIsShowPassword(!isShowPassword),
            iconImage: !isShowPassword ? IconPasswordHide : IconPasswordShow,
            alt: !isShowPassword ? 'hide password' : 'show password',
          }}
          {...register('password')}
        />
        <Input
          type={!isShowConfirmPassword ? 'password' : 'text'}
          placeholder='비밀번호 확인'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.confirmPassword}
          message={{ error: errors.confirmPassword?.message }}
          iconProps={{
            onClick: () => setIsShowConfirmPassword(!isShowConfirmPassword),
            iconImage: !isShowConfirmPassword ? IconPasswordHide : IconPasswordShow,
            alt: !isShowConfirmPassword ? 'hide password' : 'show password',
          }}
          {...register('confirmPassword')}
        />
        <Button
          onClick={handleSubmit(async ({ password, confirmPassword }) => {
            console.log(verificationId);
          })}
          color={palette.contrastText}
          css={{
            width: '100%',
            height: '48px',
            fontSize: '20px',
            backgroundColor: palette.primary.main,
            borderRadius: '32px',
            marginTop: '14px',
          }}
          disabled={!isValid}
        >
          비밀번호 변경
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { ForgotPasswordForm };
