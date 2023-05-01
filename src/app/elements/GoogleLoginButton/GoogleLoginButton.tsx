import { GOOGLE_CLIENT_ID, REDIRECT_URI } from '@configs';
import IconGoogle from '@assets/images/icons/icon-google.svg';
import type { Theme } from '@libs/theme';

const AUTHORIZE_URI = 'https://accounts.google.com/o/oauth2/v2/auth';
const RESPONSE_TYPE = 'code';
const SCOPE = [
  'https://www.googleapis.com/auth/userinfo.profile',
  'https://www.googleapis.com/auth/userinfo.email',
].join(' ');

const href = `${AUTHORIZE_URI}?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI}/google&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`;

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
        css={(theme: Theme) => ({
          width: '60px',
          height: '60px',
          border: `2px solid ${theme.palette.black.main}`,
          borderRadius: '50%',
          backgroundColor: `${theme.palette.paper}`,
          cursor: 'pointer',
        })}
      >
        <IconGoogle css={{ width: '30px', height: '30px' }} />
      </button>
      <span
        css={{
          display: 'block',
          width: '60px',
          fontSize: '12px',
          fontWeight: '600',
          textAlign: 'center',
          marginTop: '8px',
        }}
      >
        구글
      </span>
    </a>
  );
}

export { GoogleLoginButton };
