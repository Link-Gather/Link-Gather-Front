import { CSSProperties } from 'react';
import { Theme } from '@libs/theme';

function Button(props: {
  children: React.ReactNode;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
}) {
  // prop destruction
  const { width, height, fontSize, color, backgroundColor, children, onClick, className, ...rest } = props;

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
            width,
            height,
            fontSize,
            textAlign: 'center',
            fontWeight: '800',
            color,
            border: 0,
            borderRadius: height ? `${Number(height) / 2}px` : '0px',
            backgroundColor,
            cursor: 'pointer',
          },
        ];
      }}
      className={className}
      onClick={onClick}
      {...rest}
    >
      {children}
    </button>
  );
}

export { Button };
