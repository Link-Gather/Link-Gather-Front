import React from 'react';
import { Portal } from 'app/libs/portal';

function Dialog(props: { children: React.ReactNode; width: string; height: string }) {
  // prop destruction
  const { children, width, height } = props;

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
          display: 'flex',
          flexDirection: 'column',
          width: width,
          height: height,
          borderRadius: '0.8rem',
          transform: 'translate(-50%, -50%)',
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
