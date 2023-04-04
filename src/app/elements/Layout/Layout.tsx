import { mq } from '@libs/theme';
import React from 'react';

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
          {children}
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

              [mq[0]]: {
                width: '58%',
                backgroundPosition: 'left 0 bottom calc(-58vw / 2)',
              },
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
