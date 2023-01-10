import React, { CSSProperties, ReactNode } from 'react';
import { Theme } from '@emotion/react';

const directionToMarginPropertyMap: Partial<
  Record<NonNullable<CSSProperties['flexDirection']>, 'marginLeft' | 'marginTop' | 'marginRight' | 'marginBottom'>
> = {
  row: 'marginLeft',
  column: 'marginTop',
  'row-reverse': 'marginRight',
  'column-reverse': 'marginBottom',
};

function FlexBox(props: {
  className?: string;
  children?: ReactNode;
  direction?: CSSProperties['flexDirection'];
  spacing?: number;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  justifyContent?: CSSProperties['justifyContent'];
  justifyItems?: CSSProperties['justifyItems'];
  alignContent?: CSSProperties['alignContent'];
  alignItems?: CSSProperties['alignItems'];
}) {
  // prop destruction
  const { children, className, direction = 'row', width, height, spacing, ...flexProperties } = props;

  // lib hooks
  // state, ref, querystring hooks
  // form hooks
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      className={className}
      css={(theme: Theme) => {
        return [
          {
            width,
            height,
            display: 'flex',
            flexDirection: direction,
            ...flexProperties,
          },
          spacing &&
            directionToMarginPropertyMap[direction] && {
              '& > *:not(:first-of-type)': {
                [directionToMarginPropertyMap[direction]]: theme.spacing(spacing),
              },
            },
        ];
      }}
    >
      {children}
    </div>
  );
}

export { FlexBox };
