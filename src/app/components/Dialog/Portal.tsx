import React, { useMemo } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  const { children } = props;

  const newElement = document.createElement('div');
  newElement.id = 'portal-root';
  document.body.appendChild(newElement);

  const element = useMemo(() => document.getElementById('portal-root'), []);

  return reactDom.createPortal(children, element as HTMLElement);
}

export { Portal };
