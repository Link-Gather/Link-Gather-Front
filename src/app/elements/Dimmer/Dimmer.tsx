import { keyframes } from '@emotion/react';
import type { CSSProperties } from 'react';

const spin = keyframes({
  '0%': {
    transform: 'rotate(-90deg)',
  },
  '100%': {
    transform: 'rotate(270deg)',
  },
});

function Dimmer(props: { size: number; color?: CSSProperties['color'] }) {
  // prop destruction
  const { size, color = '#FFF' } = props;

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
        strokeWidth: '3px',
        strokeDasharray: `${((size * 0.54) / 4) * Math.PI}px ${size * 0.75}px`,
        strokeDashoffset: `${(size / 4) * Math.PI}px`,
        fill: 'none',
        transition: 'stroke linear 2000ms',
        stroke: color,
      }}
    >
      <circle cx={size / 2} cy={size / 2} r={size / 4} />
    </svg>
  );
}

export { Dimmer };
