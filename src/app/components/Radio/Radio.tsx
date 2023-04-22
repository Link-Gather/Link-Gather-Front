import { FlexBox } from '@elements';
import type { Theme } from '@libs/theme';
import { useState } from 'react';

function Radio(props: {
  label: string;
  options: { value: string; label: string }[];
  required?: boolean;
  optionProps?: { spacing?: number };
}) {
  // prop destruction
  const { label, options, required = false, optionProps } = props;
  // lib hooks
  // state, ref hooks
  const [isChecked, setIsChecked] = useState('');
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <fieldset css={{ border: 0 }}>
      <legend css={(theme: Theme) => ({ fontSize: '16px', color: theme.palette.secondary.n500, marginBottom: '16px' })}>
        {label}
        {required && <span css={{ color: '#FF2626 ' }}> *</span>}
      </legend>
      <FlexBox direction='row' spacing={optionProps?.spacing}>
        {options.map((option) => (
          <label css={(theme: Theme) => ({ color: theme.palette.secondary.n300 })}>
            <input
              css={(theme: Theme) => ({
                '&::checked': {
                  color: theme.palette.secondary.n300,
                },
              })}
              type='radio'
              name={option.value}
              value={option.value}
              checked={option.value === isChecked}
              onChange={() => setIsChecked(option.value)}
            />
            {option.label}
          </label>
        ))}
      </FlexBox>
    </fieldset>
  );
}

export { Radio };
