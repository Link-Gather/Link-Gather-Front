import React from 'react';
import { Button } from '../Button';
import { Portal } from './Portal';
import styles from './Dialog.module.scss';

function Dialog(props: {
  children: React.ReactNode;
  title?: string;
  dialogStatus: 'confirm' | 'warning';
  onClose: () => void;
}) {
  const { children, title, dialogStatus, onClose } = props;

  return (
    <Portal>
      <div className={styles.background} />
      <div className={styles.dialogWrap}>
        {title && <h3 className={styles.title}>{title}</h3>}
        <section className={styles.contents}>{children}</section>
        {dialogStatus === 'confirm' && (
          <section className={styles.buttons}>
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={onClose}>확인</Button>
          </section>
        )}
        {dialogStatus === 'warning' && (
          <section className={styles.buttons}>
            <Button onClick={onClose}>닫기</Button>
          </section>
        )}
      </div>
    </Portal>
  );
}

export { Dialog };
