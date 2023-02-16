import { CSSProperties } from 'react';
import { Theme } from '@libs/theme';

function ImageBox(props: {
  className?: string;
  width?: CSSProperties['width'];
  position?: CSSProperties['position'];
  left?: CSSProperties['left'];
  top?: CSSProperties['top'];
  backgroundImage: string;
  zIndex: number;
}) {
  // prop destruction
  const { width, position, left, top, backgroundImage, zIndex } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={(theme: Theme) => {
        return [
          {
            width,
            top,
            left,
            position,
            zIndex,
            height: '100%',
            backgroundImage: `url(${backgroundImage})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% auto',
          },
        ];
      }}
      // className={className}
    ></div>
  );
}

export { ImageBox };
