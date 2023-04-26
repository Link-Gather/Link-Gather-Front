import React, { forwardRef, useId } from 'react';
import { Label } from '@elements';
import palette from '@libs/theme/palettes';

const DropDown = forwardRef(
  (
    props: {
      className?: string;
      label: string;
      required?: boolean;
      name: string;
      onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
      options: { label: string; value: string | number }[];
    },
    ref: React.ForwardedRef<HTMLSelectElement>
  ) => {
    // prop destruction
    const { className, label, required, name, onChange, options } = props;

    // lib hooks
    const id = useId();
    // state, ref hooks
    // form hook
    // query hooks
    // calculated values
    // effects
    // handlers

    return (
      <>
        <Label label={label} required={required} id={id} />
        <select
          className={className}
          name={name}
          ref={ref}
          onChange={onChange}
          css={{
            width: '100%',
            padding: '12px 12px 12px 16px',
            border: `2px solid ${palette.secondary.n300}`,
            borderRadius: '8px',
            fontSize: '16px',
          }}
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
