import React, { useId, ChangeEvent, KeyboardEvent } from 'react';
import palette from '@libs/theme/palettes';
import { Label } from '@elements';

function BottomLineInput(props: {
  label: string;
  required: boolean;
  type: string;
  className?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder?: string;
  iconProps?: {
    iconImage: string;
    alt: string;
  };
}) {
  // prop destruction
  const { label, required, type, onKeyDown, onChange, placeholder, className, iconProps } = props;
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
      <input
        type={type}
        onKeyDown={onKeyDown}
        onChange={onChange}
        placeholder={placeholder}
        className={className}
        css={{
          border: 'none',
          borderBottom: `2px solid ${palette.secondary.n60}`,
          height: '50px',
          padding: '10px 40px 0px 0px',
          fontSize: '18px',
          '&:focus': {
            outline: 'none',
            borderBottom: `2px solid ${palette.primary.main}`,
          },
          '::placeholder': {
            color: palette.secondary.n60,
            fontWeight: '600',
          },
        }}
      ></input>
      {iconProps?.iconImage && (
        <img
          alt='search'
          src={iconProps?.iconImage}
          css={{ marginTop: '35px', marginLeft: '5px', position: 'absolute' }}
        />
      )}
    </>
  );
}

export { BottomLineInput };
