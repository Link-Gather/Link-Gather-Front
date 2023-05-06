import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import { SCHEMA_CONFIRM_PASSWORD, SCHEMA_PASSWORD } from '@libs/schema';
import palette from '@libs/theme/palettes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconPasswordShow from '@assets/images/icons/icon-password-show.svg';
import IconPasswordHide from '@assets/images/icons/icon-password-hide.svg';
import { Stack } from '@mui/material';

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
    <Stack width='320px' height='324px' direction='column'>
      <Stack direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <IconArrowLeft css={{ width: '32px', height: '32px' }} />
        </Link>
        <UnderlineTitle title='비밀번호 재설정' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </Stack>
      <Stack direction='column'>
        <Input
          type='password'
          placeholder='비밀번호 입력'
          autoComplete='off'
          error={errors.password}
          helperText={
            errors.password?.message ?? '8~16자 영문 대소문자, 숫자, 특수문자 (!@#$%^&*-_+.,?)만 사용 가능합니다.'
          }
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
        <Input
          type='password'
          placeholder='비밀번호 확인'
          error={errors.confirmPassword}
          helperText={errors.confirmPassword?.message}
          IconProps={{
            onClick: () => setIsShowConfirmPassword(!isShowConfirmPassword),
            Icon:
              dirtyFields.confirmPassword && !isShowConfirmPassword ? (
                <IconPasswordHide css={{ width: '24px', height: '24px' }} />
              ) : (
                <IconPasswordShow css={{ width: '24px', height: '24px' }} />
              ),
          }}
          {...register('confirmPassword')}
        />
        <Button
          onClick={handleSubmit(async ({ password, confirmPassword }) => {})}
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
      </Stack>
    </Stack>
  );
}

export { ForgotPasswordForm };
