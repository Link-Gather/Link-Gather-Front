import React from 'react';

function DialogContent(props: { children: React.ReactNode }) {
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
    <p
      css={{
        flex: 1,
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
