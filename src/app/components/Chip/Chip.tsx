import React, { useCallback } from 'react';
import styles from './Chip.module.scss';

function Chip(props: {
  label: React.ReactNode;
  data?: any;
  variant?: 'filled' | 'outlined';
  onClick?: (data?: any) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}) {
  // prop destruction
  const { label, data, variant = 'outlined', onClick, startIcon, endIcon } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const handleClick = useCallback(() => onClick?.(data), [data, onClick]);

  return (
    <div className={`${styles.chip} ${styles[variant]}`}>
      {startIcon}
      <span className={onClick ? styles.clickable : ''} onClick={handleClick}>
        {label}
      </span>
      {endIcon}
    </div>
  );
}

export { Chip };
