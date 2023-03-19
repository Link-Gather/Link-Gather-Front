import { FlexBox, Typography } from '@elements';
import { ROUTE_PATHS } from '@routes';
import type { Theme } from '@libs/theme';

function LoginBottomInfo() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox direction='column' alignItems='center'>
      <Typography
        css={{
          fontSize: '16px',
          marginBottom: '8px',
        }}
      >
        계정이 없으신가요? &nbsp;
        <a
          href={ROUTE_PATHS.signUp}
          css={(theme: Theme) => [
            {
              color: theme.palette.primary.main,
            },
          ]}
        >
          회원가입
        </a>
      </Typography>
      <Typography
        css={{
          fontSize: '14px',
        }}
      >
        <a href={`${ROUTE_PATHS.forgotPassword}?step=1`}>비밀번호 찾기</a>
      </Typography>
    </FlexBox>
  );
}

export { LoginBottomInfo };
