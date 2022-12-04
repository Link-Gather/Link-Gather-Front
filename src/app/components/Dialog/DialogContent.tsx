import React from 'react';

function DialogContent(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <p
      css={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        minHeight: '30px',
        lineHeight: '30px',
      }}
    >
      {children}
    </p>
  );
}

export { DialogContent };
