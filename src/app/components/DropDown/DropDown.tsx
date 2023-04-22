import React from 'react';
import { Label } from '@elements';
import palette from '@libs/theme/palettes';

function DropDown(props: {
  className?: string;
  label: string;
  required?: boolean;
  options: { label: string; value: string | number }[];
}) {
  // prop destruction
  const { className, label, options, required } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  //n300 n500
  return (
    <>
      <Label label={label} required={required}></Label>
      <select
        css={{
          width: '100%',
          marginTop: '8px',
          padding: '12px 12px 12px 16px',
          border: `2px solid ${palette.secondary.n300}`,
          borderRadius: '8px',
          fontSize: '16px',
        }}
      >
        {options.map((option) => (
          <option key={option.label}>{option.label}</option>
        ))}
      </select>
    </>
  );
}

export { DropDown };
