import { Button } from '../Button';
import styles from './Dialog.module.scss';

function DialogButton(props: {
  children: React.ReactNode;
  onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
}) {
  return (
    <Button className={styles.dialogOpenButton} onClick={props.onClick}>
      {props.children}
    </Button>
  );
}

export { DialogButton };
