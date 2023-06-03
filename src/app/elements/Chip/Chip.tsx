import React from 'react';
import { Theme } from '@libs/theme';

function Chip(props: {
  label: React.ReactNode;
  onClick?: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}) {
  // prop destruction
  const { label, onClick, startIcon, endIcon, className } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={(theme: Theme) => [
        {
          height: '32px',
          padding: theme.spacing(1, 2),
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '16px',
          border: '1px solid #000',
        },
      ]}
      className={className}
    >
      {startIcon}
      <span css={{ cursor: onClick ? 'pointer' : undefined }} onClick={onClick}>
        {label}
      </span>
      {endIcon}
    </div>
  );
}

export { Chip };
