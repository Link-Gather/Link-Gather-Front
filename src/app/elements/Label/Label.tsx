import React from 'react';
import palette from '@libs/theme/palettes';

function Label(props: { label: string; required?: boolean }) {
  // prop destruction
  const { label, required } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values

  // effects
  // handlers

  //n300 n500
  return (
    <label>
      <span css={{ color: palette.secondary.n500, fontWeight: '700' }}>{label}</span>
      {required && <span css={{ color: 'red', marginLeft: '3px' }}>*</span>}
    </label>
  );
}

export { Label };
