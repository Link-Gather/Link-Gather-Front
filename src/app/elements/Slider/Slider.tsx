import { forwardRef, useId } from 'react';
import { Typography } from '../Typography';
import { Theme } from '@libs/theme';
import { FlexBox } from '../FlexBox';

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
      {label && (
        <FlexBox
          direction='row'
          alignContent='center'
          css={(theme: Theme) => ({ color: theme.palette.secondary.n500, marginBottom: '16px' })}
        >
          <label htmlFor={id}>
            <Typography variant='h5'>{label}</Typography>
          </label>
          {required && <span css={{ color: '#FF2626 ' }}>*</span>}
        </FlexBox>
      )}
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
