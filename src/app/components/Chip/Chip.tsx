import React from 'react';
import styles from './Chip.module.scss';

function Chip(props: {
  label: React.ReactNode;
  variant?: 'filled' | 'outlined';
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}) {
  // prop destruction
  const { label, variant = 'outlined', onClick, startIcon, endIcon } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div className={`${styles.chip} ${styles[variant]}`}>
      {startIcon}
      <span className={onClick ? styles.clickable : ''} onClick={onClick}>
        {label}
      </span>
      {endIcon}
    </div>
  );
}

export { Chip };
