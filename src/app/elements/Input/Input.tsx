import { useId, forwardRef, useState, type InputHTMLAttributes, type ForwardedRef } from 'react';
import type { Theme } from '@libs/theme';
import { FieldError } from 'react-hook-form';
import { Stack } from '@mui/material';
import { Label } from '../Label';

const Input = forwardRef(
  (
    props: {
      error?: FieldError;
      helperText?: string;
      label?: string;
      required?: boolean;
      IconProps?: { onClick?: () => void; Icon?: JSX.Element };
    } & InputHTMLAttributes<HTMLInputElement>,
    ref: ForwardedRef<HTMLInputElement>
  ) => {
    // prop destruction
    const { error, label, type, helperText, className, IconProps, required = false, ...rest } = props;

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
      <Stack direction='column' className={className}>
        {label && <Label id={inputId} label={label} required={required} />}
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
              isFocused && {
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
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
        {IconProps && (
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
            {IconProps.Icon}
          </button>
        )}
        <span
          css={(theme: Theme) => [
            {
              display: 'inline-block',
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
          {helperText}
        </span>
      </Stack>
    );
  }
);

export { Input };
