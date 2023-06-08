import { Stack, Typography } from '@mui/material';
import { Button } from '../../../elements';
import type { Theme } from '@libs/theme';
import { useNavigate } from 'react-router-dom';
import { PATH_HOME, PATH_LOGIN } from '../../../routes';
import Astronaut from '@assets/images/backgrounds/bacground-login-astronaut.svg';
import YellowStar from '@assets/images/icons/icon-yellow-star.svg';

function SignUpSuccessScreen(props: {}) {
  // prop destruction
  // lib hooks
  const navigate = useNavigate();
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Stack css={{ alignItems: 'center', justifyContent: 'center', height: '100%', position: 'relative' }}>
      <YellowStar
        css={{ width: '68px', position: 'absolute', transform: 'rotate(24.73deg)', top: '25%', left: '30%' }}
      />
      <YellowStar
        css={{ width: '48px', position: 'absolute', transform: 'rotate(-59.47deg)', top: '34%', left: '50%' }}
      />
      <Stack direction='row' spacing='94px' css={{ alignItems: 'end' }}>
        <Stack direction='column' spacing='40px'>
          <Typography variant='h1' css={{ fontSize: '64px', fontWeight: 800 }}>
            Welcome!
          </Typography>
          <Typography
            variant='body1'
            css={(theme: Theme) => ({ fontWeight: 500, color: theme.palette.secondary.n300 })}
          >
            링크게더 가입이 완료되었습니다!
            <br />
            오늘은 어떤 흥미로운 프로젝트가 있는지 같이 확인해볼까요?
          </Typography>
          <Stack direction='row' spacing='24px'>
            <Button css={{ flex: 1 }} onClick={() => navigate(PATH_HOME)}>
              홈으로
            </Button>
            <Button variant='filled' css={{ flex: 1.4 }} onClick={() => navigate(PATH_LOGIN)}>
              로그인
            </Button>
          </Stack>
        </Stack>
        <Astronaut css={{ width: '144px' }} />
      </Stack>
    </Stack>
  );
}

export { SignUpSuccessScreen };
