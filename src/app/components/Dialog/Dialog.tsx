import React from 'react';
import { Portal } from './Portal';

function Dialog(props: { children: React.ReactNode }) {
  // prop destruction
  const { children } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <Portal>
      <div
        css={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      />
      <div
        css={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          width: '30rem',
          height: '20rem',
          borderRadius: '0.8rem',
          margin: '-10rem 0 0 -15rem',
          backgroundColor: '#ffffff',
          padding: '1rem',
        }}
      >
        {children}
      </div>
    </Portal>
  );
}

export { Dialog };
