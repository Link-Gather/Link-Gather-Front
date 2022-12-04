import React, { useMemo, useId } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  const { children } = props;
  const elementId = useId();

  const newElement = document.createElement('div');
  newElement.id = 'portal-root-' + elementId;
  document.body.appendChild(newElement);

  const element = useMemo(() => document.getElementById(newElement.id), [newElement.id]);

  return reactDom.createPortal(children, element as HTMLElement);
}

export { Portal };
