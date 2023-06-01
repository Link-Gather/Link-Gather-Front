import { useId, forwardRef, type InputHTMLAttributes, type ForwardedRef } from 'react';
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
      IconProps?: { onClick?: () => void; StartIcon?: JSX.Element; EndIcon?: JSX.Element };
      value?: string | number;
      defaultValue?: string | number;
      variant?: 'outlined' | 'underline';
    } & Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'defaultValue'>,
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
      value,
      defaultValue,
      disabled,
      ...rest
    } = props;

    // lib hooks
    const inputId = useId();

    // state, ref hooks
    // form hook
    // query hooks
    // calculated values
    const values: { value?: string | number; defaultValue?: string | number } = {};
    if (Object.prototype.hasOwnProperty.call(props, 'value')) {
      values.value = value ?? ('' as string | number);
    }
    if (Object.prototype.hasOwnProperty.call(props, 'defaultValue')) {
      values.defaultValue = defaultValue ?? ('' as string | number);
    }
    if (
      !Object.prototype.hasOwnProperty.call(props, 'value') &&
      !Object.prototype.hasOwnProperty.call(props, 'defaultValue')
    ) {
      // value, defaultValue 둘 다 prop 으로 전달하지 않으면 uncontrolled 로 가정 한다.
      values.defaultValue = '' as string | number;
    }
    const hasValue = Object.values(values).some(Boolean);
    // effects
    // handlers

    return (
      <Stack direction='column'>
        {label && <Label id={inputId} label={label} required={required} />}
        <div css={{ position: 'relative' }}>
          <input
            disabled={disabled}
            className={className}
            id={inputId}
            type={type}
            css={(theme: Theme) => {
              return [
                {
                  width: '100%',
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
                  hasValue && {
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
                variant === 'outlined' &&
                  disabled && {
                    borderBottom: `2px solid ${theme.palette.secondary.n60}`,
                    color: theme.palette.secondary.n60,
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
                  hasValue && {
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
                variant === 'underline' &&
                  disabled && {
                    borderBottom: `2px solid ${theme.palette.secondary.n60}`,
                    color: theme.palette.secondary.n60,
                  },
              ];
            }}
            {...values}
            ref={ref}
            {...rest}
          />
          {IconProps?.StartIcon && (
            <button
              type='button'
              tabIndex={-1}
              css={{
                position: 'absolute',
                top: variant === 'outlined' ? '11px' : '8px',
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
        {variant !== 'underline' && (
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
              hasValue && {
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
