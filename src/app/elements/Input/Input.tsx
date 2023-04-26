import React, { useId, forwardRef, useState } from 'react';
import type { Theme } from '@libs/theme';
import { FieldError } from 'react-hook-form';
import { FlexBox } from '../FlexBox';
import { Label } from '../Label';

const Input = forwardRef(
  (
    props: {
      error?: FieldError;
      helperText?: string;
      label?: string;
      required?: boolean;
      bottomLine?: boolean;
      iconProps?: { onClick?: () => void; iconImage?: string; alt?: string };
    } & React.InputHTMLAttributes<HTMLInputElement>,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    // prop destruction
    const {
      error,
      label,
      type,
      helperText,
      className,
      iconProps,
      required = false,
      bottomLine = false,
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
      <FlexBox direction='column'>
        {label && <Label id={inputId} label={label} required={required} />}
        <input
          id={inputId}
          type={type}
          className={className}
          css={(theme: Theme) => {
            return [
              {
                width: '100%',
                height: '50px',
                fontSize: '20px',
                borderRadius: !bottomLine ? 8 : 0,
                border: !bottomLine ? `2px solid ${theme.palette.secondary.n60}` : 'none',
                borderBottom: `2px solid ${theme.palette.secondary.n60}`,
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
                  border: !bottomLine ? `2px solid ${theme.palette.primary.main}` : 'none',
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
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
        {iconProps?.iconImage && (
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
            onClick={iconProps?.onClick}
          >
            <img src={iconProps?.iconImage} alt={iconProps.alt || 'icon'} />
          </button>
        )}
        <span
          css={(theme: Theme) => [
            {
              display: 'inline-block',
              width: '100%',
              height: bottomLine ? '0px' : '20px',
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
      </FlexBox>
    );
  }
);

export { Input };
