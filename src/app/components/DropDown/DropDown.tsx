import React, { forwardRef, SelectHTMLAttributes, useId } from 'react';
import { Label } from '@elements';
import type { Theme } from '@libs/theme';

const DropDown = forwardRef(
  (
    props: {
      className?: string;
      label?: string;
      required?: boolean;
      name: string;
      onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
      options: { label: string; value: string | number }[];
    } & SelectHTMLAttributes<HTMLSelectElement>,
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    // prop destruction
    const { className, label, required = false, name, onChange, options } = props;

    // lib hooks
    const selectId = useId();
    // state, ref hooks
    // form hook
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
      <>
        {label && <Label id={selectId} label={label} required={required} />}
        <select
          className={className}
          name={name}
          id={selectId}
          ref={ref}
          onChange={onChange}
          css={(theme: Theme) => ({
            width: '100%',
            padding: '12px 12px 12px 16px',
            border: `2px solid ${theme.palette.secondary.n300}`,
            borderRadius: '8px',
            fontSize: '16px',
          })}
        >
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </>
    );
  }
);

export { DropDown };
