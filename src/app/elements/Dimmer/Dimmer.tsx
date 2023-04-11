import { keyframes } from '@emotion/react';

const spin = keyframes({
  '0%': {
    transform: 'rotate(0deg)',
  },
  '100%': {
    transform: 'rotate(360deg)',
  },
});

export function Dimmer(props: { size: number }) {
  // prop destruction
  const { size } = props;
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
        display: 'block',
        width: `${size}px`,
        height: `${size}px`,
        animation: `${spin} 2000ms linear`,
        animationDirection: 'normal',
        animationIterationCount: 'infinite',
        strokeWidth: '4px',
        strokeDasharray: '4px',
        fill: 'none',
        transition: 'stroke linear 2000ms',
        stroke: '#ffffff',
        opacity: 0.5,
      }}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 4} />
    </svg>
  );
}
