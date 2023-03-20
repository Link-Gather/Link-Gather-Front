import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import IconArrowRight from '@assets/images/icons/icon-arrow-right-white.svg';
import { FlexBox, UnderlineTitle, Input, Button } from '@elements';
import { ROUTE_PATHS } from '@routes';
import IconArrowLeft from '@assets/images/icons/icon-arrow-left.svg';
import IconCheckGreen from '@assets/images/icons/icon-check-green.svg';
import palette from '@libs/theme/palettes';
import { VALIDATION_PATTERN } from '@libs/constants';

const schema = yup.object().shape({
  email: yup
    .string()
    .matches(VALIDATION_PATTERN.email, '올바른 이메일 형식을 입력해주세요.')
    .required('이메일을 입력해주세요.'),
});

function ForgotPasswordEmailForm() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks

  const {
    register,
    handleSubmit,
    formState: { errors, dirtyFields, isValid },
  } = useForm<{ email: string }>({
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
  const forgotPasswordEmailSubmit = (data: { email: string }) => {
    // TODO : 비밀번호 찾기 Email 인증 전송 API
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
      <UnderlineTitle title='비밀번호 찾기' css={{ marginBottom: '40px' }} />
      <FlexBox direction='column'>
        <Input
          type='email'
          placeholder='이메일'
          css={{ width: '100%', marginBottom: '16px' }}
          inputStatus={errors.email ? 'error' : dirtyFields.email ? 'active' : 'inActive'}
          message={errors.email && errors.email.message}
          {...register('email')}
        >
          {!errors.email && <img src={IconCheckGreen} alt='checked email' />}
        </Input>
        <Button
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
          onClick={handleSubmit(forgotPasswordEmailSubmit)}
        >
          인증하기 <img src={IconArrowRight} alt='go next' />
        </Button>
      </FlexBox>
    </FlexBox>
  );
}

export { ForgotPasswordEmailForm };
