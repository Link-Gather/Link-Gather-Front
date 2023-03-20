import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { ROUTE_PATHS } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';
import { VALIDATION_PATTERN } from '@libs/constants';

const schema = yup.object().shape({
  password: yup
    .string()
    .matches(VALIDATION_PATTERN.password, '영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.')
    .required('비밀번호를 다시 확인해주세요.'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], '비밀번호가 일치하지 않습니다 :(')
    .required('비밀번호를 입력해주세요'),
});

function ForgotPasswordForm() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowConfirmPassword, setIsShowConfirmPassword] = useState(false);

  // form hooks
  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<{ password: string; confirmPassword: string }>({
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
  const forgotPasswordPasswordSubmit = (data: { password: string; confirmPassword: string }) => {
    // TODO : 비밀번호 재설정 API
    console.log(data);
  };

  return (
    <FlexBox width='320px' direction='column' spacing={4} css={{ position: 'relative', minWidth: '320px' }}>
      <a
        href={ROUTE_PATHS.logIn}
        css={{
          position: 'absolute',
          top: '0px',
          left: '0px',
        }}
      >
        <img src={IconArrowLeft} alt='go back' />
      </a>
      <UnderlineTitle title='비밀번호 재설정' css={{ marginBottom: '40px' }} />
      <FlexBox direction='column'>
        <Input
          type={!isShowPassword ? 'password' : 'text'}
          placeholder='비밀번호'
          onClick={() => setIsShowPassword(!isShowPassword)}
          css={{ width: '100%', marginBottom: '16px' }}
          inputStatus={errors.password ? 'error' : dirtyFields.password ? 'active' : 'inActive'}
          message={
            errors.password
              ? errors.password.message
              : dirtyFields.password
              ? ''
              : '영문, 숫자, 특수문자 조합 8~16자리로 입력해주세요.'
          }
          {...register('password')}
        >
          {dirtyFields.password ? (
            <img src={!isShowPassword ? IconPasswordHide : IconPasswordShow} alt='checked password' />
          ) : null}
        </Input>
        <Input
          type={!isShowConfirmPassword ? 'password' : 'text'}
          placeholder='비밀번호 확인'
          onClick={() => setIsShowConfirmPassword(!isShowConfirmPassword)}
          css={{ width: '100%', marginBottom: '16px' }}
          inputStatus={
            !dirtyFields.confirmPassword ? 'inActive' : errors.confirmPassword || !isValid ? 'error' : 'active'
          }
          message={
            !dirtyFields.confirmPassword
              ? '비밀번호를 한번 더 입력해주세요.'
              : errors.confirmPassword || !isValid
              ? errors.confirmPassword?.message || '비밀번호를 다시 확인해주세요.'
              : '비밀번호가 일치합니다 :)'
          }
          {...register('confirmPassword')}
        >
          {dirtyFields.confirmPassword && (
            <img src={!isShowConfirmPassword ? IconPasswordHide : IconPasswordShow} alt='checked password' />
          )}
        </Input>
        <Button
          onClick={handleSubmit(forgotPasswordPasswordSubmit)}
          css={{
            width: '100%',
            height: '48px',
            fontSize: '20px',
            color: palette.contrastText,
            backgroundColor: palette.primary.main,
            borderRadius: '32px',
            marginTop: '24px',
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
