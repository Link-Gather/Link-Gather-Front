import React, { ChangeEvent, KeyboardEvent } from 'react';
import palette from '@libs/theme/palettes';
import { Label } from '@elements';

function BottomLineInput(props: {
  label: string;
  required?: boolean;
  name: string;
  type: string;
  value: string;
  className?: string;
  onKeyDown?: (e: KeyboardEvent<HTMLInputElement>) => void;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  placeholder?: string;
  iconProps?: {
    iconImage: string;
    alt: string;
  };
}) {
  const { label, required, name, type, value, onKeyDown, onChange, placeholder, className, iconProps } = props;
  return (
    <>
      <Label label={label} required={required} />
      <input
        name={name}
        type={type}
        value={value}
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
