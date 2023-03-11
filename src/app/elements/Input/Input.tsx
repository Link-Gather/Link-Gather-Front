import { CSSProperties, useId } from 'react';
import type { Theme } from '@libs/theme';

export type InputStatus = 'inActive' | 'active' | 'error';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputStatus?: InputStatus;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  className?: string;
  marginTop?: CSSProperties['marginTop'];
  marginLeft?: CSSProperties['marginLeft'];
  message?: string;
  onClick?: () => void | null;
  children?: React.ReactNode;
}

function Input(props: Props) {
  // prop destruction
  const {
    inputStatus = 'default',
    type,
    width,
    marginTop,
    marginLeft,
    height,
    fontSize,
    color,
    backgroundColor,
    message,
    onClick,
    className,
    children,
    ...rest
  } = props;

  // lib hooks
  const inputId = useId();

  // state, ref hooks

  // form hook
  // query hooks
  // calculated values
  // effects

  // handlers

  return (
    <label
      htmlFor={inputId}
      css={{
        position: 'relative',
      }}
    >
      <input
        id={inputId}
        type={type}
        css={(theme: Theme) => {
          return [
            {
              width,
              height,
              marginTop,
              marginLeft,
              fontSize: fontSize || 20,
              fontWeight: 500,
              color,
              borderRadius: 8,
              backgroundColor,
              padding: '11px 16px 11px 16px',
              outline: 'none',
              '&::placeholder': {
                color: theme.palette.secondary.n60,
              },
              '&:focus': {
                '& + button': {
                  opacity: 1,
                },
              },
            },
            inputStatus === 'error' && {
              border: `2px solid ${theme.palette.secondary.red}`,
              '&:focus': {
                border: `2px solid ${theme.palette.secondary.red}`,
              },
            },
            inputStatus === 'active' && {
              border: `2px solid ${theme.palette.secondary.n500}`,
              '&:focus': {
                border: `2px solid ${theme.palette.primary.main}`,
              },
            },
            inputStatus === 'inActive' && {
              border: `2px solid ${theme.palette.secondary.n60}`,
              '&:focus': {
                border: `2px solid ${theme.palette.primary.main}`,
              },
            },
          ];
        }}
        className={className}
        {...rest}
      />

      <button
        type='button'
        tabIndex={-1}
        css={{
          position: 'absolute',
          top: '0',
          right: '8px',
          display: 'flex',
          alignItems: 'center',
          height,
          border: 'none',
          background: 'none',
          cursor: 'pointer',
          outline: 'none',
          opacity: 0,
          '&:focus': {
            opacity: 1,
          },
        }}
        onClick={onClick}
      >
        {children}
      </button>
      {inputStatus === 'error' && (
        <span
          css={(theme: Theme) => {
            return [
              {
                display: 'inline-block',
                height: '20px',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '20px',
                color: theme.palette.secondary.red,
              },
            ];
          }}
        >
          {message}
        </span>
      )}
    </label>
  );
}

export { Input };
