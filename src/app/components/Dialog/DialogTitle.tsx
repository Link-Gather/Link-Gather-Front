import React from 'react';

function DialogTitle(props: { children: React.ReactNode }) {
  const { children } = props;

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
