import { CSSProperties } from 'react';

function ImageBox(props: {
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  position?: CSSProperties['position'];
  left?: CSSProperties['left'];
  top?: CSSProperties['top'];
  backgroundImage: string;
  zIndex?: string;
}) {
  // prop destruction
  const { className, width, height, position, left, top, backgroundImage, zIndex } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <div
      css={{
        width,
        top,
        left,
        position,
        zIndex,
        height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100% auto',
      }}
      className={className}
    ></div>
  );
}

export { ImageBox };
