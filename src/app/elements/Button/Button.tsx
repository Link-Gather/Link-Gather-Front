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
}

function Button(props: Props) {
  // prop destruction
  const { width, height, fontSize, color, backgroundColor, borderRadius, children, className, ...rest } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <button
      css={(theme: Theme) => {
        return [
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
            border: 0,
            borderRadius,
            backgroundColor,
            cursor: 'pointer',
            ':disabled': {
              backgroundColor: theme.palette.secondary.n40,
            },
          },
        ];
      }}
      className={className}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
