import React, { forwardRef, useId } from 'react';
import { FormControl, InputLabel, Select, SelectProps, MenuItem } from '@mui/material';
import { Theme } from '../../libs/theme';
import ArrowDownIcon from '@assets/images/icons/icon-arrow-down.svg';
import { Label } from '../Label';

const SingleSelect = forwardRef(function SingleSelect(
  props: {
    onChange?: () => void;
    helperText?: string;
    options: { label: string; value: string | number }[];
    placeholder?: string;
  } & Omit<SelectProps, 'onChange' | 'placeholder'>,
  ref: React.ForwardedRef<any>
) {
  // prop destruction
  const {
    className,
    required = false,
    variant,
    label,
    value,
    onChange,
    defaultValue,
    helperText,
    placeholder,
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
      {label && <Label id={id} label={label} required={required} />}
      {placeholder && !Object.values(values).filter(Boolean).length && (
        //HACK: inputLabel 위치가 너무 이상해서 조정해줘야한다...
        <InputLabel css={{ top: '-6px' }} variant={variant}>
          {placeholder}
        </InputLabel>
      )}
      <Select
        labelId={id}
        label={placeholder && !Object.values(values).filter(Boolean).length ? placeholder : undefined}
        {...values}
        onChange={onChange}
        variant={variant}
        inputRef={ref}
        {...selectProps}
        IconComponent={() => <ArrowDownIcon css={{ width: '24px', height: '24px', marginRight: '12px' }} />}
        css={(theme: Theme) => ({
          border: `2px solid ${theme.palette.secondary.n300}`,
          color: theme.palette.secondary.n300,
          fontSize: '16px',
          fontWeight: 600,
          borderRadius: '8px',
          maxHeight: '40px',
          alignItems: 'center',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
        })}
      >
        {options.map(({ label, value }) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
});

export { SingleSelect };
