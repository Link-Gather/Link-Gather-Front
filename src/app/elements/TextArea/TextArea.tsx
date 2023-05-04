import { ForwardedRef, TextareaHTMLAttributes, forwardRef, useId, useState } from 'react';
import { Theme } from '@libs/theme';
import { FieldError } from 'react-hook-form';
import { Label } from '../Label';
import { Stack } from '@mui/material';

const TextArea = forwardRef(function TextArea(
  props: {
    error?: FieldError;
    className?: string;
    label?: string;
    required?: boolean;
  } & TextareaHTMLAttributes<HTMLTextAreaElement>,
  ref: ForwardedRef<HTMLTextAreaElement>
) {
  // prop destruction
  const { className, error, label, required = false, ...rest } = props;
  // lib hooks
  const id = useId();
  // state, ref hooks
  const [isFocused, setIsFocused] = useState(false);
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Stack direction='column'>
      {label && <Label id={id} label={label} required={required} />}
      <textarea
        id={id}
        css={(theme: Theme) => {
          return [
            {
              width: '100%',
              overflow: 'scroll',
              fontSize: '20px',
              borderRadius: 8,
              border: `2px solid ${theme.palette.secondary.n60}`,
              padding: '11px 16px 11px 16px',
              outline: 'none',
              resize: 'none',
              '&::placeholder': {
                color: theme.palette.secondary.n60,
              },
              '&:focus': {
                border: `2px solid ${theme.palette.primary.main}`,
                '& + button': {
                  opacity: 1,
                },
              },
            },
            isFocused && {
              border: `2px solid ${theme.palette.secondary.n300}`,
              '&:focus': {
                border: `2px solid ${theme.palette.primary.main}`,
              },
            },
            error && {
              border: `2px solid ${theme.palette.secondary.red}`,
              '&:focus': {
                border: `2px solid ${theme.palette.secondary.red}`,
              },
            },
          ];
        }}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={className}
        ref={ref}
        {...rest}
      />
    </Stack>
  );
});

export { TextArea };
