import React, { useMemo, useId } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  const elementId = useId();

  // state, ref hooks
  const newElement = document.createElement('div');
  newElement.id = `portal-root-${elementId}`;
  document.body.appendChild(newElement);

  const element = useMemo(() => document.getElementById(newElement.id), [newElement.id]);

  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return reactDom.createPortal(children, element as HTMLElement);
}

export { Portal };
