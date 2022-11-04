import React, { useCallback } from 'react';
import { clsx } from '../../util/classname';
import styles from './Chip.module.scss';

function Chip(props: {
  label: React.ReactNode;
  data?: any;
  variant?: 'filled' | 'outlined';
  onClick?: (data?: any) => void;
  startIcon?: React.ReactNode;
  onStartIconClick?: (data?: any) => void;
  endIcon?: React.ReactNode;
  onEndIconClick?: (data?: any) => void;
}) {
  // prop destruction
  const { label, data, variant = 'outlined', onClick, startIcon, onStartIconClick, endIcon, onEndIconClick } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers
  const handleClick = useCallback(() => onClick?.(data), [data, onClick]);
  const handleStartIconClick = useCallback(() => onStartIconClick?.(data), [data, onStartIconClick]);
  const handleEndIconClick = useCallback(() => onEndIconClick?.(data), [data, onEndIconClick]);

  return (
    <div className={clsx({ [styles.chip]: true, [styles[variant]]: true })}>
      {startIcon && (
        <span className={clsx({ [styles.clickable]: !!onStartIconClick })} onClick={handleStartIconClick}>
          {startIcon}
        </span>
      )}
      <span className={clsx({ [styles.clickable]: !!onClick })} onClick={handleClick}>
        {label}
      </span>
      {endIcon && (
        <span className={clsx({ [styles.clickable]: !!onEndIconClick })} onClick={handleEndIconClick}>
          {endIcon}
        </span>
      )}
    </div>
  );
}

export { Chip };
