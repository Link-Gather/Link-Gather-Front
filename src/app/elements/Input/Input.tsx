import { useId, forwardRef } from 'react';
import type { Theme } from '@libs/theme';
import { UseFormRegisterReturn } from 'react-hook-form';

export type InputStatus = 'inActive' | 'active' | 'error';

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {
  inputStatus?: InputStatus;
  message?: string;
  onClick?: () => void | null;
  children?: React.ReactNode;
  register?: UseFormRegisterReturn;
}

const Input = forwardRef((props: Props, ref: React.ForwardedRef<HTMLInputElement>) => {
  // prop destruction
  const { inputStatus = 'active', type, message, className, children, register, onClick, ...rest } = props;

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
      className={className}
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
              width: '100%',
              height: '50px',
              fontSize: '20px',
              borderRadius: 8,
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
        ref={ref}
        {...rest}
        {...register}
      />

      <button
        type='button'
        tabIndex={-1}
        css={{
          position: 'absolute',
          top: '0',
          right: '8px',
          display: 'flex',
          height: '50px',
          alignItems: 'center',
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

      <span
        css={(theme: Theme) => [
          {
            display: 'block',
            width: '100%',
            height: '20px',
            fontSize: '12px',
            fontWeight: '400',
            lineHeight: '20px',
          },
          inputStatus === 'inActive' && {
            color: theme.palette.secondary.n60,
          },
          inputStatus === 'error' && {
            color: theme.palette.secondary.red,
          },
          inputStatus === 'active' && {
            color: theme.palette.secondary.green,
          },
        ]}
      >
        {message}
      </span>
    </label>
  );
});

export { Input };
