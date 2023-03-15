import React from 'react';
import { FlexBox, KakaoLoginButton, GoogleLoginButton, GithubLoginButton } from '@elements';

function OauthContainer() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox justifyContent='space-around' css={{ padding: '0px 26px' }}>
      <KakaoLoginButton />
      <GoogleLoginButton />
      <GithubLoginButton />
    </FlexBox>
  );
}

export { OauthContainer };
