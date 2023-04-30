import React from 'react';

import IconGithub from '@assets/images/icons/icon-github.svg';
import type { Theme } from '@libs/theme';

import { REDIRECT_URI, GITHUB_CLIENT_ID } from '@configs';

const href = `https://github.com/login/oauth/authorize?client_id=${GITHUB_CLIENT_ID}&redirect_uri=${REDIRECT_URI}/github`;

function GithubLoginButton() {
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
        <IconGithub css={{ width: '24px', height: '24px' }} />
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
        깃허브
      </span>
    </a>
  );
}

export { GithubLoginButton };
