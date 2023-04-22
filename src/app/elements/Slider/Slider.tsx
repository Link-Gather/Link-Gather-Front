import { forwardRef, useId } from 'react';
import { Typography } from '../Typography';
import { FlexBox } from '../FlexBox';
import { Label } from '../Label';

const Slider = forwardRef(function Slider(
  props: {
    label?: string;
    required?: boolean;
    className?: string;
    marks?: string[];
  } & React.InputHTMLAttributes<HTMLInputElement>,
  ref: React.ForwardedRef<HTMLInputElement>
) {
  // prop destruction
  const { label, className, required = false, min, max, step, defaultValue, marks, ...rest } = props;

  // lib hooks
  const id = useId();
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <FlexBox direction='column' className={className}>
      {label && <Label id={id} label={label} required={required} />}
      <input id={id} ref={ref} type='range' min={min} max={max} step={step} defaultValue={defaultValue} {...rest} />
      <FlexBox direction='row' justifyContent='space-between'>
        {marks?.map((mark) => {
          return (
            <Typography variant='span' css={{ fontSize: '12px' }}>
              {mark}
            </Typography>
          );
        })}
      </FlexBox>
    </FlexBox>
  );
});

export { Slider };
