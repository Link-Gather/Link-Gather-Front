import { CSSProperties } from 'react';

function ImageBox(props: {
  className?: string;
  width?: CSSProperties['width'];
  height?: CSSProperties['height'];
  position?: CSSProperties['position'];
  left?: CSSProperties['left'];
  top?: CSSProperties['top'];
  imageSrc: string;
  alt: string;
  zIndex?: string;
}) {
  // prop destruction
  const { className, width, height, position, left, top, imageSrc, zIndex, alt } = props;

  // lib hooks
  // state, ref hooks
  // form hook
  // query hooks
  // calculated values
  // effects
  // handlers

  return (
    <img
      css={{
        width,
        top,
        left,
        position,
        zIndex,
        height,
      }}
      src={imageSrc}
      className={className}
      alt={alt}
    ></img>
  );
}

export { ImageBox };
