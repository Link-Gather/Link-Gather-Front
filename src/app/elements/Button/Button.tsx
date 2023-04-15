import { CSSProperties, useEffect, useRef, useState } from 'react';
import { Dimmer } from '@elements';
import { Theme } from '@libs/theme';

function Button(
  props: {
    color?: CSSProperties['color'];
    children: React.ReactNode;
    className?: string;
    isLoading?: boolean;
  } & React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  // prop destruction
  const { color, children, className, isLoading, ...rest } = props;

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
      css={(theme: Theme) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        fontWeight: '800',
        color,
        cursor: 'pointer',
        ':disabled': {
          backgroundColor: theme.palette.secondary.n40,
        },
      })}
      className={className}
      disabled={isLoading}
      {...rest}
      ref={buttonRef}
    >
      {isLoading ? <Dimmer size={size} color={color} /> : children}
    </button>
  );
}

export { Button };
