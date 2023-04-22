import React, { ChangeEvent } from 'react';
import { Label } from '@elements';
import palette from '@libs/theme/palettes';

function TextArea(props: {
  label: string;
  required?: boolean;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value: string;
  name: string;
  placeholder: string;
}) {
  const { label, required, onChange, value, name, placeholder } = props;
  return (
    <>
      <Label label={label} required />
      <textarea
        onChange={onChange}
        value={value}
        name={name}
        placeholder={placeholder}
        css={{
          marginTop: '8px',
          width: '100%',
          height: '100%',
          fontWeight: '500',
          fontSize: '14px',
          borderRadius: 8,
          border: `2px solid ${palette.secondary.n300}`,
          padding: '8px 24px 8px 8px',
          outline: 'none',
          resize: 'none',
        }}
      />
    </>
  );
}

export { TextArea };
