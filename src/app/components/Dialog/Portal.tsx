import React, { useMemo } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  const element = useMemo(() => document.getElementById('portal-root'), []);

  return reactDom.createPortal(
    props.children,
    element as unknown as HTMLElement
  );
}

export { Portal };
