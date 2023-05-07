import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Dimmer } from '@elements';
import type { Theme } from '@libs/theme';

function Button(
  props: {
    color?: CSSProperties['color'];
    children: React.ReactNode;
    className?: string;
    loading?: boolean;
    variant?: 'outlined' | 'filled';
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  // prop destruction
  const { color, children, className, loading, variant = 'outlined', ...rest } = props;

  // lib hooks
  // state, ref hooks
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = useState(0);

  // form hook
  // query hooks
  // calculated values

  // effects
  useEffect(() => {
    const currentButtonRef = buttonRef.current;
    if (currentButtonRef) {
      const newSize = Math.min(currentButtonRef.clientHeight, currentButtonRef.clientWidth);
      setSize(newSize);
    }
  }, []);

  // handlers

  return (
    <button
      css={(theme: Theme) => [
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          fontWeight: 700,
          color: color || theme.palette.secondary.n300,
          borderRadius: '6px',
          padding: '6px 16px',
          cursor: 'pointer',
          ':disabled': {
            backgroundColor: theme.palette.secondary.n40,
          },
        },
        variant === 'outlined' && {
          border: `2px solid ${theme.palette.secondary.n60}`,
        },
        variant === 'filled' && {
          backgroundColor: theme.palette.primary.main,
          color: '#fff',
        },
      ]}
      className={className}
      disabled={loading}
      {...rest}
      ref={buttonRef}
    >
      {loading ? <Dimmer size={size} color={color} /> : children}
    </button>
  );
}

export { Button };
