import { keyframes } from '@emotion/react';
import { Theme } from '@emotion/react';

const spin = keyframes({
  '0%': {
    strokeDashoffset: '600px',
    transform: 'rotate(-90deg)',
  },
  '100%': {
    strokeDashoffset: 0,
    transform: 'rotate(270deg)',
  },
});

export function Dimmer() {
  // prop destruction
  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={{
        width: '100%',
        height: '100%',
        display: 'flex',
        top: 0,
        left: 0,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
      }}
    >
      <svg
        css={(theme: Theme) => ({
          width: '250px',
          height: '250px',
          animation: `${spin} 1500ms ease 0ms`,
          animationDirection: 'normal',
          animationIterationCount: 'infinite',
          strokeWidth: '20',
          strokeDasharray: '628px',
          fill: 'none',
          transition: 'stroke ease 200ms',
          stroke: theme.palette.primary.main,
          '&:hover': {
            stroke: theme.palette.primary.p20,
          },
        })}
      >
        <circle cx={125} cy={125} r={100} />
      </svg>
    </div>
  );
}
