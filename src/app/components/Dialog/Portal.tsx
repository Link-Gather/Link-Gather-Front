import React, { useMemo } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  const { children } = props;
  const element = useMemo(() => document.getElementById('portal-root'), []);

  return reactDom.createPortal(children, element as HTMLElement);
}

export { Portal };
