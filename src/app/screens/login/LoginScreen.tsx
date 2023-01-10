import React from 'react';
import { FlexBox } from '@elements';

// TODO: SW-56에서 구현 예정. 현재는 oauth 연결을 위해 만들어 놓음
function LoginScreen() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox width='100%' height='100%' justifyContent='center' alignItems='center'>
      <FlexBox width={500} height={720} direction='column'>
        <FlexBox justifyContent='space-around'>
          <button>Google</button>
          <button>Kakao</button>
          <button>Github</button>
        </FlexBox>
      </FlexBox>
    </FlexBox>
  );
}

export { LoginScreen };
