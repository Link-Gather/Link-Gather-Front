import React from 'react';
import { KAKAO_CLIENT_ID, REDIRECT_URI } from '@configs';
import type { Theme } from '@libs/theme';

const kakaoIcon = (
  <svg width='26' height='25' viewBox='0 0 26 25' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M12.9997 0.213867C5.8989 0.213867 0.142578 4.87366 0.142578 10.622C0.142578 14.2894 2.49115 17.5067 6.03115 19.3606L4.67258 23.8894C4.58993 24.1643 4.89666 24.3914 5.13544 24.2322L10.2918 20.7945C11.1654 20.9463 12.0703 21.0302 12.9997 21.0302C20.1005 21.0302 25.8569 16.3704 25.8569 10.622C25.8569 4.87366 20.1005 0.213867 12.9997 0.213867Z'
      fill='#3A1D1D'
    />
  </svg>
);

const href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_CLIENT_ID}&redirect_uri=${REDIRECT_URI}/kakao&response_type=code`;

function KakaoLoginButton() {
  // prop destruction
  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <a href={href}>
      <button
        css={(theme: Theme) => [
          {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '60px',
            height: '60px',
            border: `2px solid ${theme.palette.black.main}`,
            borderRadius: '50%',
            backgroundColor: '#F9E000',
          },
        ]}
      >
        {kakaoIcon}
      </button>
      <p
        css={{
          width: '60px',
          fontSize: '12px',
          fontWeight: '600',
          textAlign: 'center',
          marginTop: '8px',
        }}
      >
        카카오톡
      </p>
    </a>
  );
}

export { KakaoLoginButton };
