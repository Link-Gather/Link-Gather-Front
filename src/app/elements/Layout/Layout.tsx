import React from 'react';
import { Header } from '@components';

function Layout(props: { children: React.ReactNode; componentStyle: 'contents' | 'full' }) {
  // prop destruction
  const { children, componentStyle } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers
  return (
    <>
      {componentStyle === 'contents' && (
        <div
          css={{
            width: '100%',
            minHeight: '100vh',
          }}
        >
          <Header />
          <div css={{ maxWidth: '1352px', width: '100%', margin: '0 auto' }}>{children}</div>
        </div>
      )}
      {componentStyle === 'full' && (
        <div
          css={{
            width: '100%',
            minHeight: '100vh',
            backgroundColor: '#2E558E',
          }}
        >
          <div
            css={{
              position: 'relative',
              width: '100%',
              height: '100vh',
              margin: '0px auto',
              overflow: 'hidden',
            }}
          >
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export { Layout };
