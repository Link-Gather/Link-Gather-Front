import React from 'react';

import { Portal } from '@libs/portal';

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
          top: '0px',
          left: '0px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
        }}
      >
        <div
          css={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-between',
            width,
            height,
            borderRadius: '8px',
            backgroundColor: '#ffffff',
            boxShadow: '4px 4px 0px #000000',
            padding: '24px',
          }}
        >
          {children}
        </div>
      </div>
    </Portal>
  );
}

export { Dialog };
