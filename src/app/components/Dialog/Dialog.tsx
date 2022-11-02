import { Button } from '../Button';
import styles from './Dialog.module.scss';

function Dialog(props: {
  children: React.ReactNode;
  statusDialog?: 'confirm' | 'warning';
  onClose: () => void;
}) {
  console.log(props.statusDialog);
  return (
    <>
      <div className={styles.background} />
      <div className={styles.contents}>
        <p className={styles.dialogText}>{props.children}</p>
        {props.statusDialog === 'confirm' && (
          <p className={styles.dialogButtons}>
            <Button onClick={props.onClose}>닫기</Button>
            <Button onClick={props.onClose}>확인</Button>
          </p>
        )}
        {props.statusDialog === 'warning' && (
          <p className={styles.dialogButtons}>
            <Button onClick={props.onClose}>닫기</Button>
          </p>
        )}
      </div>
    </>
  );
}

export { Dialog };
