import styles from './Dimmer.module.scss';

export function Dimmer() {
  return (
    <div className={styles.dimmer}>
      <svg className={styles.spinner}>
        <circle cx={125} cy={125} r={100} />
      </svg>
    </div>
  );
}
