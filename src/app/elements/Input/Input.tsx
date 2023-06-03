import { useId, forwardRef, useState, type InputHTMLAttributes, type ForwardedRef } from 'react';
import type { Theme } from '@libs/theme';
import type { FieldError } from 'react-hook-form';
import { Stack } from '@mui/material';
import { Label } from '../Label';

const Input = forwardRef(
  (
    props: {
      error?: FieldError | boolean;
      helperText?: string;
      label?: string;
      required?: boolean;
      IconProps?: { onClick?: () => void; StartIcon?: JSX.Element; EndIcon?: JSX.Element };
      variant?: 'outlined' | 'underline';
    } & InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    // prop destruction
    const {
      error,
      label,
      type,
      helperText,
      className,
      IconProps,
      required = false,
      variant = 'outlined',
      ...rest
    } = props;

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
      <Stack direction='column'>
        {label && <Label id={inputId} label={label} required={required} />}
        <div css={{ position: 'relative' }}>
          <input
            className={className}
            id={inputId}
            type={type}
            css={(theme: Theme) => {
              return [
                {
                  width: '100%',
                  height: '50px',
                  fontSize: '20px',
                  borderRadius: '8px',
                  border: `2px solid ${theme.palette.secondary.n60}`,
                  padding: variant === 'outlined' ? '11px 16px 11px 16px' : '6px',
                  outline: 'none',
                  paddingLeft: IconProps?.StartIcon ? '44px' : undefined,
                  '&::placeholder': {
                    color: theme.palette.secondary.n60,
                  },
                },
                variant === 'outlined' && {
                  border: `2px solid ${theme.palette.secondary.n60}`,
                  '&:focus': {
                    border: `2px solid ${theme.palette.primary.main}`,
                  },
                },
                variant === 'outlined' &&
                  isFocused && {
                    border: `2px solid ${theme.palette.secondary.n300}`,
                    '&:focus': {
                      border: `2px solid ${theme.palette.primary.main}`,
                    },
                  },
                variant === 'outlined' &&
                  error && {
                    border: `2px solid ${theme.palette.secondary.red}`,
                    '&:focus': {
                      border: `2px solid ${theme.palette.secondary.red}`,
                    },
                  },
                variant === 'underline' && {
                  border: 'none',
                  borderRadius: 0,
                  borderBottom: `2px solid ${theme.palette.secondary.n60}`,
                  '&:focus': {
                    borderBottom: `2px solid ${theme.palette.primary.main}`,
                  },
                },
                variant === 'underline' &&
                  isFocused && {
                    borderBottom: `2px solid ${theme.palette.secondary.n300}`,
                    '&:focus': {
                      borderBottom: `2px solid ${theme.palette.primary.main}`,
                    },
                  },
                variant === 'underline' &&
                  error && {
                    borderBottom: `2px solid ${theme.palette.secondary.red}`,
                    '&:focus': {
                      borderBottom: `2px solid ${theme.palette.secondary.red}`,
                    },
                  },
              ];
            }}
            ref={ref}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            {...rest}
          />
          {IconProps?.StartIcon && (
            <button
              type='button'
              tabIndex={-1}
              css={{
                position: 'absolute',
                top: type === 'outlined' ? '11px' : '8px',
                left: '8px',
                display: 'flex',
                alignItems: 'center',
                border: 'none',
                background: 'none',
                cursor: 'pointer',
                outline: 'none',
              }}
              onClick={IconProps.onClick}
            >
              {IconProps.StartIcon}
            </button>
          )}
          {IconProps?.EndIcon && (
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
              onClick={IconProps.onClick}
            >
              {IconProps.EndIcon}
            </button>
          )}
        </div>
        {variant !== 'underline' && helperText && (
          <span
            css={(theme: Theme) => [
              {
                display: 'inline-block',
                width: '100%',
                height: '20px',
                fontSize: '12px',
                fontWeight: '400',
                lineHeight: '20px',
                color: '#5E6C83',
              },
              isFocused && {
                color: theme.palette.secondary.n300,
              },
              error && {
                color: theme.palette.secondary.red,
              },
            ]}
          >
            {helperText}
          </span>
        )}
      </Stack>
    );
  }
);

export { Input };
