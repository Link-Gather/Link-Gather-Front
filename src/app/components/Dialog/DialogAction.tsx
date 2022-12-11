import React from 'react';

function DialogAction(props: { children: React.ReactNode }) {
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
    <div
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '30px',
        gap: '0.8rem',
      }}
    >
      {children}
    </div>
  );
}

export { DialogAction };
