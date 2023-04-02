import { useId, forwardRef, useState } from 'react';
import type { Theme } from '@libs/theme';
import { FieldError, UseFormRegisterReturn } from 'react-hook-form';

const Input = forwardRef(
  (
    props: {
      error?: FieldError;
      getValues?: string;
      message?: string;
      children?: React.ReactNode;
      maxLength?: number;
      register?: UseFormRegisterReturn;
      iconProps?: { onIconClick?: () => void };
    } & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // prop destruction

    const { error, type, getValues, message, className, children, register, iconProps, ...rest } = props;

    // lib hooks
    const inputId = useId();

    // state, ref hooks
    const [isFocused, setIsFocused] = useState(false);

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
                border: `2px solid ${theme.palette.secondary.n60}`,
                padding: '11px 16px 11px 16px',
                outline: 'none',
                '&::placeholder': {
                  color: theme.palette.secondary.n60,
                },
                '&:focus': {
                  border: `2px solid ${theme.palette.primary.main}`,
                  '& + button': {
                    opacity: 1,
                  },
                },
              },
              getValues && {
                border: `2px solid ${theme.palette.secondary.n300}`,
                '&:focus': {
                  border: `2px solid ${theme.palette.primary.main}`,
                },
              },
              error && {
                border: `2px solid ${theme.palette.secondary.red}`,
                '&:focus': {
                  border: `2px solid ${theme.palette.secondary.red}`,
                },
              },
            ];
          }}
          ref={ref}
          {...rest}
          {...register}
          onFocus={(event) => setIsFocused(event.currentTarget.value.length !== 0)}
          onBlur={(event) => setIsFocused(event.currentTarget.value.length !== 0)}
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
          onClick={iconProps?.onIconClick}
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
              color: theme.palette.secondary.n60,
            },
            isFocused && {
              color: theme.palette.secondary.n300,
            },
            error && {
              color: theme.palette.secondary.red,
            },
          ]}
        >
          {message}
        </span>
      </label>
    );
  }
);

export { Input };
