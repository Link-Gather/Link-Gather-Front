import { Stack } from '@mui/material';
import { useEffect, Dispatch } from 'react';
import { Theme } from '@libs/theme';
import AlarmIcon from '@assets/images/icons/red-alarm.svg';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 일단은 초단위로만 카운트한다.
 */
function Timer(props: { seconds: number; onChange: Dispatch<number>; className?: string }) {
  // prop destruction
  const { seconds, onChange, className } = props;
  // lib hooks
  // state, ref hooks
  // query hooks
  // calculated values
  // effects
  useEffect(() => {
    if (seconds > 0) {
      const timer = setInterval(() => {
        //@ts-expect-error
        onChange((prev) => prev - 1);
      }, 1000);

      return () => {
        clearInterval(timer);
      };
    }
  }, [seconds]);
  // handlers
  return (
    <Stack direction='row' className={className} css={{ alignItems: 'center' }}>
      <AlarmIcon css={{ width: '18px' }} />
      <span
        css={(theme: Theme) => ({
          fontWeight: 400,
          fontFamily: 'Noto Sans',
          fontSize: '14px',
          color: theme.palette.secondary.red,
        })}
      >
        {formatTime(seconds)}
      </span>
    </Stack>
  );
}

export { Timer };
