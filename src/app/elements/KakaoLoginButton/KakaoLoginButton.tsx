import { KAKAO_CLIENT_ID, REDIRECT_URI } from '@configs';
import IconKakao from '@assets/images/icons/icon-kakao.svg';
import type { Theme } from '@libs/theme';

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
        css={(theme: Theme) => ({
          width: '60px',
          height: '60px',
          border: `2px solid ${theme.palette.black.main}`,
          borderRadius: '50%',
          backgroundColor: '#F9E000',
          cursor: 'pointer',
        })}
      >
        <IconKakao css={{ width: '24px', height: '24px' }} />
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
        카카오톡
      </span>
    </a>
  );
}

export { KakaoLoginButton };
