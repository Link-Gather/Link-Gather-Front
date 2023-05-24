import { useId } from 'react';
import { Label } from '../Label';
import { Slider as MuiSlider, type SliderProps, sliderClasses, Stack } from '@mui/material';
import type { Theme } from '@libs/theme';

function Slider(
  props: {
    label?: string;
    required?: boolean;
    className?: string;
    marks?: { label: string; value: number }[];
  } & SliderProps
) {
  // prop destruction
  const { label, className, required = false, min, max, step, value, marks, ...rest } = props;

  // lib hooks
  const id = useId();
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <Stack direction='column' alignContent='center'>
      {label && <Label id={id} required={required} label={label} />}
      <Stack alignItems='center' justifyContent='center'>
        <MuiSlider
          {...rest}
          css={(theme: Theme) => ({
            width: '94%',
            [`& .${sliderClasses.markLabel}`]: {
              fontSize: '12px',
              color: '#344054',
            },
            [`& .${sliderClasses.rail}`]: {
              color: '#eaecf0',
            },
            [`& .${sliderClasses.track}`]: {
              backgroundColor: theme.palette.primary.main,
            },
            [`& .${sliderClasses.thumb}`]: {
              backgroundColor: '#fff',
              border: '2px solid #000',
              '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
                boxShadow: 'inherit',
              },
            },
            [`& .${sliderClasses.mark}`]: {
              display: 'none',
            },
          })}
          min={min}
          max={max}
          step={step}
          marks={marks}
        />
      </Stack>
    </Stack>
  );
}

export { Slider };
