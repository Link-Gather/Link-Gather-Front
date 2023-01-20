import React from 'react';
import { GOOGLE_CLIENT_ID } from '@configs';

const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
// TODO: change to config > REDIRECT_URI
const REDIRECT_URI = 'http://localhost:3030';
const RESPONSE_TYPE = 'code';
const SCOPE = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
].join(' ');

const href = `${AUTHORIZE_URI}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

const googleIcon = (
  <svg width='30' height='30' viewBox='0 0 30 30' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.0338 20.4106 18.2644 22.5 15 22.5C10.8581 22.5 7.5 19.1419 7.5 15C7.5 10.8581 10.8581 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5112 5.86375C21.2787 3.78312 18.2925 2.5 15 2.5C8.09688 2.5 2.5 8.09688 2.5 15C2.5 21.9031 8.09688 27.5 15 27.5C21.9031 27.5 27.5 21.9031 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z'
      fill='#FFC107'
    />
    <path
      d='M3.94125 9.18188L8.04813 12.1938C9.15938 9.4425 11.8506 7.5 15 7.5C16.9119 7.5 18.6513 8.22125 19.9756 9.39937L23.5113 5.86375C21.2788 3.78312 18.2925 2.5 15 2.5C10.1988 2.5 6.035 5.21062 3.94125 9.18188Z'
      fill='#FF3D00'
    />
    <path
      d='M15.0002 27.5004C18.2289 27.5004 21.1627 26.2648 23.3808 24.2554L19.5121 20.9817C18.2571 21.9323 16.6971 22.5004 15.0002 22.5004C11.7489 22.5004 8.98832 20.4273 7.94832 17.5342L3.87207 20.6748C5.94082 24.7229 10.1421 27.5004 15.0002 27.5004Z'
      fill='#4CAF50'
    />
    <path
      d='M27.2569 12.5519H26.25V12.5H15V17.5H22.0644C21.5694 18.8981 20.67 20.1037 19.51 20.9819C19.5106 20.9812 19.5113 20.9812 19.5119 20.9806L23.3806 24.2544C23.1069 24.5031 27.5 21.25 27.5 15C27.5 14.1619 27.4137 13.3438 27.2569 12.5519Z'
      fill='#1976D2'
    />
  </svg>
);

function GoogleLoginButton() {
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
        css={{
          width: '60px',
          height: '60px',
          border: '2px solid #000000',
          borderRadius: '50%',
          backgroundColor: '#ffffff',
        }}
      >
        {googleIcon}
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
        구글
      </p>
    </a>
  );
}

export { GoogleLoginButton };
