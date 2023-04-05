import React from 'react';
import type { Theme } from '@libs/theme';

type Variant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'span';

function Typography(props: { variant?: Variant; className?: string; children: React.ReactNode }) {
  // prop destruction
  const { variant = 'span', className, children } = props;

  // lib hooks
  const HTMLTag = variant;

  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values

  const css = ((variant: Variant) => {
    switch (variant) {
      case 'h1':
        return {
          fontSize: '32px',
          fontWeight: 800,
          lineHeight: '40px',
        };
      case 'h2':
        return {
          fontSize: '28px',
          fontWeight: 700,
          lineHeight: '36px',
        };
      case 'h3':
        return {
          fontSize: '24px',
          fontWeight: 600,
          lineHeight: '32px',
        };
      case 'h4':
        return {
          fontSize: '20px',
          fontWeight: 500,
          lineHeight: '28px',
        };
      case 'h5':
        return {
          fontSize: '16px',
          fontWeight: 400,
          lineHeight: '24px',
        };
      case 'h6':
        return {
          fontSize: '12px',
          fontWeight: 400,
          lineHeight: '20px',
        };
      case 'span': {
        return (theme: Theme) => [
          {
            fontFamily: '"Noto Sans KR", sans-serif',
            fontSize: '14px',
            fontWeight: 500,
            lineHeight: '24px',
            color: theme.palette.secondary.n300,
          },
        ];
      }
      default: {
        return (theme: Theme) => [
          {
            color: theme.palette.black.main,
          },
        ];
      }
    }
  })(variant);

  // effects
  // handlers
  return (
    <HTMLTag css={css} className={className}>
      {children}
    </HTMLTag>
  );
}

export { Typography };
