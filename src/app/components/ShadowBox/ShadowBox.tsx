import React, { CSSProperties } from 'react';
import { FlexBox } from '@elements';
import { Theme } from '@libs/theme';

function ShadowBox(props: {
  padding?: CSSProperties['padding'];
  children: React.ReactNode;
  css?: {
    [x: string]: string | { marginLeft?: CSSProperties['marginLeft']; marginRight?: CSSProperties['marginRight'] };
  };
}) {
  // prop destruction
  const { padding, children, ...rest } = props;

  // lib hooks
  // state, ref hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div {...rest}>
      <FlexBox
        alignItems='center'
        direction='column'
        css={(theme: Theme) => {
          return [
            {
              position: 'relative',
              border: `2px solid ${theme.palette.black.main}`,
              borderRadius: '16px',
              boxShadow: `20px 16px 0px ${theme.palette.black.main}`,
              backgroundColor: theme.palette.paper,
              padding,
              zIndex: 10,
            },
          ];
        }}
      >
        {children}
      </FlexBox>
    </div>
  );
}

export { ShadowBox };
