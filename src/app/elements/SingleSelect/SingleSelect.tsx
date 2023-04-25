import React, { forwardRef, useId } from 'react';
import { FormControl, FormHelperText, InputLabel, Select, SelectProps, MenuItem, SvgIcon } from '@mui/material';
import { Theme } from '../../libs/theme';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import IconGoogle from '@assets/images/icons/icon-google.svg';

const SingleSelect = forwardRef(function SingleSelect(
  props: {
    onChange?: () => void;
    helperText?: string;
    options: { label: string; value: string | number }[];
    placeholder?: string;
  } & Omit<SelectProps, 'onChange' | 'placeholder'>,
  ref: React.ForwardedRef<any>
) {
  console.log('!!!', ArrowDownIcon, IconGoogle);
  // prop destruction
  const {
    className,
    required,
    variant,
    label,
    value,
    onChange,
    defaultValue,
    helperText,
    options,
    error,
    disabled,
    ...selectProps
  } = props;

  // lib hooks

  // state, ref, querystring hooks
  const id = useId();

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

  // handlers

  return (
    <FormControl className={className} required={required} error={error} disabled={disabled}>
      {label && !Object.values(values).filter(Boolean).length && (
        <InputLabel id={id} variant={variant}>
          {label}
        </InputLabel>
      )}
      <Select
        label={label && !Object.values(values).filter(Boolean).length ? label : undefined}
        {...values}
        onChange={onChange}
        SelectDisplayProps={{
          'aria-labelledby': id,
        }}
        variant={variant}
        inputRef={ref}
        {...selectProps}
        IconComponent={() => <ArrowDownIcon />}
        css={(theme: Theme) => ({
          border: `2px solid ${theme.palette.secondary.n300}`,
          color: theme.palette.secondary.n300,
          borderRadius: '8px',
        })}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
      {helperText && <FormHelperText>{helperText}</FormHelperText>}
    </FormControl>
  );
});

export { SingleSelect };
