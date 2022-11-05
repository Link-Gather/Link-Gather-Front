import React from 'react';
import styles from './Chip.module.scss';

function Chip(props: {
  label: React.ReactNode;
  variant?: 'filled' | 'outlined';
  selected?: boolean;
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
}) {
  // prop destruction
  const { label, variant = 'outlined', selected, onClick, startIcon, endIcon } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div className={`${styles.chip} ${styles[variant]} ${selected ? styles.selected : ''}`}>
      {startIcon}
      <span css={{ cursor: 'pointer' }} onClick={onClick}>
        {label}
      </span>
      {endIcon}
    </div>
  );
}

export { Chip };
