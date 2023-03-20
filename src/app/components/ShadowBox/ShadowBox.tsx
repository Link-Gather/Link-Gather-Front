import React from 'react';
import { FlexBox } from '@elements';
import { Theme } from '@libs/theme';

function ShadowBox(props: { children: React.ReactNode; className?: string }) {
  // prop destruction
  const { children, className } = props;

  // lib hooks
  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <FlexBox
      alignItems='center'
      direction='column'
      className={className}
      css={(theme: Theme) => [
        {
          position: 'relative',
          border: `2px solid ${theme.palette.black.main}`,
          borderRadius: '16px',
          boxShadow: `20px 16px 0px ${theme.palette.black.main}`,
          backgroundColor: theme.palette.paper,
          overflow: 'hidden',
          zIndex: 10,
        },
      ]}
    >
      {children}
    </FlexBox>
  );
}

export { ShadowBox };
