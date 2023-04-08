import { keyframes } from '@emotion/react';

const spin = keyframes({
  '0%': {
    strokeDashoffset: '700px',
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
    <svg
      css={{
        width: '19px',
        height: '19px',
        animation: `${spin} 2000ms ease 0ms`,
        animationDirection: 'normal',
        animationIterationCount: 'infinite',
        strokeWidth: '2',
        strokeDasharray: '300px',
        fill: 'none',
        transition: 'stroke ease 200ms',
        stroke: '#ffffff',
        opacity: 0.5,
      }}
    >
      <circle cx={9} cy={9} r={7} />
    </svg>
  );
}
