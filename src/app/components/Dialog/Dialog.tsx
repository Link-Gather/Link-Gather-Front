import { Button } from '../Button';
import { Portal } from './Portal';
import styles from './Dialog.module.scss';

function Dialog(props: {
  children: React.ReactNode;
  statusDialog?: 'confirm' | 'warning';
  onClose: () => void;
}) {
  return (
    <Portal>
      <div className={styles.background} />
      <div className={styles.contents}>
        <p className={styles.dialogText}>{props.children}</p>

        {props.statusDialog === 'confirm' && (
          <div className={styles.dialogButtons}>
            <Button onClick={props.onClose}>닫기</Button>
            <Button onClick={props.onClose}>확인</Button>
          </div>
        )}
        {props.statusDialog === 'warning' && (
          <div className={styles.dialogButtons}>
            <Button onClick={props.onClose}>닫기</Button>
          </div>
        )}
      </div>
    </Portal>
  );
}

export { Dialog };
