import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { PATH_LOGIN } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import palette from '@libs/theme/palettes';
import { SCHEMA_EMAIL } from '@libs/schema';
import { Link } from 'react-router-dom';

const schema = yup.object({
  email: SCHEMA_EMAIL.required('이메일을 입력해주세요.'),
});

function ForgotPasswordEmailForm() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks

  const {
    register,
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
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox width='320px' direction='column' spacing={4}>
      <FlexBox direction='row' width='100%'>
        <Link to={PATH_LOGIN}>
          <img src={IconArrowLeft} alt='go back' />
        </Link>
        <UnderlineTitle title='비밀번호 찾기' css={{ width: 'calc(100% - 64px)', marginBottom: '40px' }} />
      </FlexBox>
      <FlexBox direction='column'>
        <Input
          type='email'
          placeholder='이메일'
          css={{ width: '100%', marginBottom: '16px' }}
          error={errors.email}
          message={errors.email?.message}
          iconProps={{ iconImage: (isValid && IconCheckGreen) || undefined, alt: (isValid && 'valid email') || '' }}
          {...register('email')}
        />
        <Button
          color={palette.contrastText}
          css={{
            width: '100%',
            height: '48px',
            fontSize: '20px',
            backgroundColor: palette.primary.main,
            borderRadius: '32px',
            marginTop: '24px',
          }}
          disabled={!isValid}
          onClick={handleSubmit(async ({ email }) => {})}
        >
          인증하기 <img src={IconArrowRight} alt='go next' />
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { ForgotPasswordEmailForm };
