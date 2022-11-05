import { Button } from '../Button';
import { Portal } from './Portal';
import styles from './Dialog.module.scss';

function Dialog(props: {
  children: React.ReactNode;
  dialogStatus: 'confirm' | 'warning';
  onClose: () => void;
}) {
  const { children, dialogStatus, onClose } = props;

  return (
    <Portal>
      <div className={styles.background} />
      <div className={styles.contents}>
        <p className={styles.dialogText}>{children}</p>

        {dialogStatus === 'confirm' && (
          <div className={styles.dialogButtons}>
            <Button onClick={onClose}>닫기</Button>
            <Button onClick={onClose}>확인</Button>
          </div>
        )}
        {dialogStatus === 'warning' && (
          <div className={styles.dialogButtons}>
            <Button onClick={onClose}>닫기</Button>
          </div>
        )}
      </div>
    </Portal>
  );
}

export { Dialog };
