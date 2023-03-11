import { CSSProperties, useId } from 'react';
import type { Theme } from '@libs/theme';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputType?: 'default' | 'focus' | 'error' | null;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  fontSize?: CSSProperties['fontSize'];
  color?: CSSProperties['color'];
  backgroundColor?: CSSProperties['backgroundColor'];
  className?: string;
  marginTop?: CSSProperties['marginTop'];
  marginLeft?: CSSProperties['marginLeft'];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  label?: string;
  onClick?: () => void;
  message?: string;
  value?: string;
  children?: React.ReactNode;
}

function Input(props: Props) {
  // prop destruction
  const {
    inputType = 'default',
    type,
    width,
    marginTop,
    marginLeft,
    height,
    fontSize,
    color,
    backgroundColor,
    onChange,
    onClick,
    className,
    message,
    value,
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
              border: value
                ? inputType === 'error'
                  ? `2px solid ${theme.palette.secondary.red}`
                  : `2px solid ${theme.palette.secondary.n500}`
                : `2px solid ${theme.palette.secondary.n60}`, //초기 기본 색
              '&::placeholder': {
                color: theme.palette.secondary.n60,
              },
              '&:focus': {
                // focus일 때 보라색, focus이고 에러일 때 빨간색, focus가 아니고 에러일 때도 빨간색, focus가 아니고 에러가 아닐 때 검정색
                border:
                  inputType === 'error'
                    ? `2px solid ${theme.palette.secondary.red}`
                    : `2px solid ${theme.palette.primary.main}`,
              },
            },
            // inputType === 'error' && {
            //   border: `2px solid ${theme.palette.secondary.red}`,
            // },
            // inputType === 'default' && {
            //   border: `2px solid ${theme.palette.secondary.n60}`,
            // },
            // inputType === 'default' && {
            //   border: `2px solid ${theme.palette.secondary.n60}`,
            // },
          ];
        }}
        className={className}
        onChange={onChange}
        {...rest}
      />
      {message && (
        <span
          css={(theme: Theme) => {
            return [
              {
                position: 'absolute',
                fontSize: '12px',
                lineHeight: '20px',
                left: '0',
                top: '100%',
                weight: '400',
                color: inputType === 'error' ? theme.palette.secondary.red : theme.palette.secondary.n300,
              },
            ];
          }}
        >
          {message}
        </span>
      )}
      <button
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
        }}
        type='button'
        onClick={onClick}
      >
        {children}
      </button>
    </label>
  );
}

export { Input };
