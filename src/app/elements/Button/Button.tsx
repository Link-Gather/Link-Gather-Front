import { useEffect, useRef, useState, type CSSProperties, type ReactNode, type ButtonHTMLAttributes } from 'react';
import { Dimmer } from '@elements';
import type { Theme } from '@libs/theme';

function Button(
  props: {
    children: ReactNode;
    className?: string;
    isLoading?: boolean;
    loadingColor?: CSSProperties['color'];
  } & ButtonHTMLAttributes<HTMLButtonElement>
) {
  // prop destruction
  const { loadingColor, children, className, isLoading, ...rest } = props;

  // lib hooks
  // state, ref hooks
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [size, setSize] = useState(30);

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
      css={(theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '800',
        cursor: 'pointer',
        ':disabled': {
          backgroundColor: !isLoading ? theme.palette.secondary.n40 : undefined,
        },
      })}
      className={className}
      disabled={isLoading}
      {...rest}
      ref={buttonRef}
    >
      {isLoading ? <Dimmer size={size} color={loadingColor} /> : children}
    </button>
  );
}

export { Button };
