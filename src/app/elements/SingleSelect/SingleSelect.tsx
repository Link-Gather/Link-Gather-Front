import React, { forwardRef, useEffect, useId, useRef, useState } from 'react';
import { FormControl, SelectProps, MenuItem, Stack } from '@mui/material';
import { Theme } from '../../libs/theme';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import { Label } from '../Label';

/**
 * uncontrolled는 수정이 필요하다.
 */
const SingleSelect = forwardRef(function SingleSelect(
  props: {
    onChange?: (value: any) => void;
    helperText?: string;
    options: { label: string; value: string | number }[];
    placeholder?: string;
    value?: string | number;
    defaultValue?: string | number;
    variant?: 'outlined' | 'text';
  } & Omit<SelectProps, 'onChange' | 'placeholder' | 'value' | 'defaultValue' | 'variant'>,
  ref: React.ForwardedRef<any>
) {
  // prop destruction
  const {
    className,
    required = false,
    variant = 'outlined',
    label,
    value,
    onChange,
    defaultValue,
    placeholder,
    options,
    error,
    disabled,
  } = props;

  // lib hooks

  // state, ref, querystring hooks
  const id = useId();
  const [open, setOpen] = useState(false);
  const divRef = useRef<HTMLDivElement>(null);

  // form hooks

  // query hooks

  // calculated values
  const values: { value?: string | number; defaultValue?: string | number } = {};
  if (Object.prototype.hasOwnProperty.call(props, 'value')) {
    values.value = options.find((option) => option.value === value)?.value ?? ('' as string | number);
  }
  if (Object.prototype.hasOwnProperty.call(props, 'defaultValue')) {
    values.defaultValue = options.find((option) => option.value === defaultValue)?.value ?? ('' as string | number);
  }
  if (
    !Object.prototype.hasOwnProperty.call(props, 'value') &&
    !Object.prototype.hasOwnProperty.call(props, 'defaultValue')
  ) {
    // value, defaultValue 둘 다 prop 으로 전달하지 않으면 uncontrolled 로 가정 한다.
    values.defaultValue = '' as string | number;
  }

  // effects
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (divRef.current && !divRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // handlers

  return (
    <>
      <FormControl className={className} required={required} error={error} disabled={disabled}>
        {label && <Label id={id} label={label} required={required} />}
        <div ref={divRef}>
          <div
            css={(theme: Theme) => [
              {
                maxHeight: '40px',
                fontSize: '16px',
                fontWeight: 600,
                cursor: 'pointer',
                minHeight: '24px',
                boxSizing: 'content-box',
              },
              variant === 'outlined' && {
                border: `2px solid ${open ? theme.palette.primary.main : theme.palette.secondary.n300}`,
                color: open ? theme.palette.primary.main : theme.palette.secondary.n300,
                borderRadius: '8px',
                padding: '6px 16px',
                alignItems: 'center',
                '.MuiOutlinedInput-notchedOutline': { border: 0 },
                position: 'relative',
              },
              variant === 'text' && {
                border: 'none',
              },
            ]}
            onClick={() => setOpen((prev) => !prev)}
          >
            {!(value || defaultValue) && placeholder && (
              <span
                css={(theme: Theme) => ({
                  fontFamily: 'Noto Sans',
                  fontWeight: 600,
                  color: open ? theme.palette.primary.main : theme.palette.secondary.n300,
                })}
              >
                {placeholder}
              </span>
            )}
            {(value || defaultValue) && (
              <span
                css={(theme: Theme) => ({
                  fontFamily: 'Noto Sans',
                  fontWeight: 600,
                  color: open ? theme.palette.primary.main : theme.palette.secondary.n300,
                })}
              >
                {options.find((option) => option.value === value || option.value === defaultValue)?.label}
              </span>
            )}
            <ArrowDownIcon
              css={(theme: Theme) => ({
                width: '24px',
                height: '24px',
                position: 'absolute',
                right: variant === 'outlined' ? '12px' : 0,
                top: 'calc(50% - 12px)',
                color: open ? theme.palette.primary.main : theme.palette.secondary.n300,
              })}
            />
            <input hidden id={id} ref={ref} {...values} onChange={onChange} />
          </div>
          {open && (
            <Stack
              css={{
                position: 'absolute',
                top: '100%',
                width: '100%',
                fontFamily: 'Noto Sans',
                left: 0,
                border: `2px solid #000`,
                boxShadow: '4px 4px 0px #000',
                backgroundColor: '#fff',
                borderRadius: '8px',
                zIndex: 10,
              }}
            >
              {options.map(({ label, value }) => (
                <MenuItem
                  css={(theme: Theme) => ({ '&:hover': { color: theme.palette.primary.main } })}
                  key={value}
                  value={value}
                  onClick={() => {
                    onChange?.(value);
                    setOpen(false);
                  }}
                >
                  {label}
                </MenuItem>
              ))}
            </Stack>
          )}
        </div>
      </FormControl>
    </>
  );
});

export { SingleSelect };
