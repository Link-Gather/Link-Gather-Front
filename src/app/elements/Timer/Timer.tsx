import { useEffect, useState, Dispatch } from 'react';

function formatTime(time: number) {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  return `${minutes}:${seconds.toString().padStart(2, '0')}`;
}

/**
 * 일단은 초단위로만 카운트한다.
 */
function Timer(props: { seconds: number; onChange: Dispatch<number> }) {
  // prop destruction
  const { seconds, onChange } = props;
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
  return <div>{formatTime(seconds)}</div>;
}

export { Timer };
