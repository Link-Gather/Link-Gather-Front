import styles from "./Dialog.module.scss";

function Dialog(props: {
  children: React.ReactNode;
  onClose?: React.MouseEventHandler<HTMLButtonElement>;
}) {
  console.log(styles);
  return (
    <>
      <div className={styles.background} />
      <div className={styles.contents}>{props.children}</div>
    </>
  );
}

export { Dialog };
