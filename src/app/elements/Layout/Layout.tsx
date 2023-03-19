import { type ComponentStyle } from '@routes';

function Layout(props: { children: React.ReactNode; componentStyle: ComponentStyle }) {
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
              maxWidth: '1920px',
              margin: '0px auto',
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
