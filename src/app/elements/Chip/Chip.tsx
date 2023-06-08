import React from 'react';
import type { Theme } from '@libs/theme';

function Chip(props: {
  label: React.ReactNode;
  variant?: 'filled' | 'outlined';
  color?: 'primary' | 'black';
  selected?: boolean;
  onClick: () => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
}) {
  // prop destruction
  const { label, variant = 'outlined', color = 'primary', selected, onClick, startIcon, endIcon, className } = props;
  // lib hooks
  // state, ref, querystring hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      className={className}
      css={(theme: Theme) => [
        {
          height: '32px',
          padding: theme.spacing(1, 2),
          display: 'inline-flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 500,
          borderRadius: '20px',
          '&>:not(:first-of-type)': {
            marginLeft: '4px',
          },
          cursor: 'pointer',
        },
        variant === 'outlined'
          ? {
              borderWidth: '1px',
              borderStyle: 'solid',
              borderColor: theme.palette[color].main,
              color: theme.palette.text,
              '&:hover': {
                borderColor: theme.palette[color].light,
              },
              '&:active': {
                borderColor: theme.palette[color].dark,
              },
            }
          : {
              backgroundColor: theme.palette[color].main,
              color: theme.palette.contrastText,
              '&:hover': {
                backgroundColor: theme.palette[color].light,
              },
              '&:active': {
                backgroundColor: theme.palette[color].dark,
              },
            },
        selected && { borderWidth: '2px', fontWeight: 700 },
      ]}
    >
      {startIcon}
      <span onClick={onClick}>{label}</span>
      {endIcon}
    </div>
  );
}

export { Chip };
