import { CSSProperties } from 'react';
import { Theme } from '@libs/theme';

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  borderRadius?: CSSProperties['borderRadius'];
  disabled?: boolean;
}

function Button(props: Props) {
  // prop destruction
  const {
    width,
    height,
    fontSize,
    color,
    backgroundColor,
    borderRadius,
    children,
    onClick,
    className,
    disabled,
    ...rest
  } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <button
      css={(theme: Theme) => [
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width,
          height,
          fontSize,
          textAlign: 'center',
          fontWeight: '800',
          color,
          border: 'none',
          borderRadius,
          backgroundColor,
          cursor: 'pointer',
          ':disabled': {
            backgroundColor: theme.palette.secondary.n40,
          },
        },
      ]}
      className={className}
      onClick={onClick}
      disabled={disabled}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
