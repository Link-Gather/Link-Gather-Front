import React from 'react';

function DialogTitle(props: { children: React.ReactNode }) {
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
    <h3
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '4rem',
        lineHeight: '30px',
        fontWeight: 'bolder',
      }}
    >
      {children}
    </h3>
  );
}

export { DialogTitle };
