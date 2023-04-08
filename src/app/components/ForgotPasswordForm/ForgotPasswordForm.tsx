import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import palette from '@libs/theme/palettes';
import { SCHEMA_CONFIRM_PASSWORD, SCHEMA_PASSWORD } from '@libs/schema';
import { Link } from 'react-router-dom';

const schema = yup.object({
  password: SCHEMA_PASSWORD.required('비밀번호를 다시 확인해주세요.'),
  confirmPassword: SCHEMA_CONFIRM_PASSWORD.required('비밀번호를 입력해주세요'),
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
    <FlexBox width='320px' direction='column' spacing={4}>
      <FlexBox direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <img src={IconArrowLeft} alt='go back' />
        </Link>
        <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </FlexBox>
      <FlexBox direction='column'>
        <Input
          type={!isShowPassword ? 'password' : 'text'}
          placeholder='비밀번호'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.password}
          message={errors.password?.message}
          iconProps={{
            onClick: () => setIsShowPassword(!isShowPassword),
            iconImage: dirtyFields.password && !isShowPassword ? IconPasswordHide : IconPasswordShow,
            alt: dirtyFields.password && !isShowPassword ? 'hide password' : 'show password',
          }}
          {...register('password')}
        />
        <Input
          type={!isShowConfirmPassword ? 'password' : 'text'}
          placeholder='비밀번호 확인'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.confirmPassword}
          message={errors.confirmPassword?.message}
          iconProps={{
            onClick: () => setIsShowConfirmPassword(!isShowConfirmPassword),
            iconImage: dirtyFields.confirmPassword && !isShowConfirmPassword ? IconPasswordHide : IconPasswordShow,
            alt: dirtyFields.confirmPassword && !isShowConfirmPassword ? 'hide password' : 'show password',
          }}
          {...register('confirmPassword')}
        />
        <Button
          onClick={handleSubmit(async ({ password, confirmPassword }) => {})}
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
