import React from 'react';
import { Button, Input, FlexBox } from '@elements';
import palette from '@libs/theme/palettes';

function LoginForm() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <form>
      <FlexBox direction='column' spacing={4}>
        <Input type='email' width='100%' height={50} placeholder='이메일' />
        <Input type='password' minLength={8} maxLength={16} width='100%' height={50} placeholder='비밀번호' />
        <Button
          width='100%'
          height={48}
          fontSize={20}
          color={palette.contrastText}
          backgroundColor={palette.primary.main}
          onClick={() => console.log('login')}
          css={{
            marginTop: 24,
          }}
          disabled
        >
          로그인
        </Button>
      </FlexBox>
    </form>
  );
}

export { LoginForm };
