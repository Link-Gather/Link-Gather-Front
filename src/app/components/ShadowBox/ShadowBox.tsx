import React, { CSSProperties } from 'react';
import { FlexBox } from '@elements';
import { Theme } from '@libs/theme';

function ShadowBox(props: {
  padding?: CSSProperties['padding'];
  margin?: CSSProperties['margin'];
  children: React.ReactNode;
}) {
  // prop destruction
  const { padding, margin, children } = props;

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
      css={(theme: Theme) => [
        {
          border: `2px solid ${theme.palette.black.main}`,
          borderRadius: '16px',
          boxShadow: `20px 16px 0px ${theme.palette.black.main}`,
          backgroundColor: theme.palette.paper,
          padding,
          margin,
          overflow: 'hidden',
        },
      ]}
    >
      {children}
    </FlexBox>
  );
}

export { ShadowBox };
