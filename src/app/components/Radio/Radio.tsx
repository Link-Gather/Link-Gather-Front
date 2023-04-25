import { Label } from '@elements';
import { FormControl, RadioGroup, Radio as MuiRadio, FormControlLabel, RadioGroupProps } from '@mui/material';
import { useId } from 'react';

function Radio(
  props: { label: string; options: { value: string; label: string }[]; required?: boolean } & RadioGroupProps
) {
  // prop destruction
  const { label, options, required = false, value, onChange } = props;
  // lib hooks
  const id = useId();
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FormControl>
      {label && <Label id={id} required={required} label={label} />}
      <RadioGroup row id={id} value={value} onChange={onChange}>
        {options.map((option) => (
          <FormControlLabel key={option.value} value={option.value} control={<MuiRadio />} label={option.label} />
        ))}
      </RadioGroup>
    </FormControl>
  );
}

export { Radio };
