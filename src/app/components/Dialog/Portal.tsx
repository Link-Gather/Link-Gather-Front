import { useMemo } from 'react';
import reactDom from 'react-dom';

function Portal(props: { children: React.ReactNode }) {
  const element = useMemo(() => document.getElementById('dialog'), []);
  return reactDom.createPortal(props.children, element as HTMLElement);
}

export { Portal };
