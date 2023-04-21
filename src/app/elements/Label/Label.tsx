import React, { ReactNode } from 'react';
import palettes from '@libs/theme/palettes';

function Label(props: { children: ReactNode; required?: boolean }) {
  const { children, required } = props;

  return (
    <label css={{ color: palettes.secondary.n500, fontWeight: '600' }}>{required ? children + '*' : children}</label>
  );
}

export { Label };
