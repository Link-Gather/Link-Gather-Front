import React from 'react';
import { Button } from '../Button';
import { Portal } from './Portal';

function Dialog(props: {
  children: React.ReactNode;
  title?: string;
  dialogStatus: 'confirm' | 'warning';
  onClose: () => void;
}) {
  const { children, title, dialogStatus, onClose } = props;

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
          width: '500px',
          height: '300px',
          margin: '-150px 0 0 -250px',
          backgroundColor: '#ffffff',
          padding: '1rem',
        }}
      >
        {title && (
          <h3
            css={{
              width: '100%',
              height: '30px',
              lineHeight: '30px',
              fontWeight: 'bolder',
              borderBottom: '1px solid #666666',
            }}
          >
            {title}
          </h3>
        )}
        <section
          css={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            height: 'calc(100% - 60px)',
          }}
        >
          {children}
        </section>
        {dialogStatus === 'confirm' && (
          <section
            css={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: '30px',
              '&>button': {
                margin: '0 0.25rem',
              },
            }}
          >
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={onClose}>확인</Button>
          </section>
        )}
        {dialogStatus === 'warning' && (
          <section
            css={{
              display: 'flex',
              justifyContent: 'flex-end',
              height: '30px',
              '&>button': {
                margin: '0 0.25rem',
              },
            }}
          >
            <Button onClick={onClose}>닫기</Button>
          </section>
        )}
      </div>
    </Portal>
  );
}

export { Dialog };
