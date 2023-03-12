import React, { useEffect, useRef, useState, useMemo } from 'react';
import styled from '@emotion/styled';

const ArrowButton = styled('button')({
  height: '50px',
  width: '30px',
  backgroundColor: 'white',
  margin: '0px 10px',
  cursor: 'pointer',
  opacity: '0.9',
  borderRadius: '12px',
  '&:hover': {
    backgroundColor: 'rgb(148, 148, 148)',
  },
});

export function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  className?: string;
  width?: string;
  height?: string;
}) {
  // prop destruction
  const { images, className, width, height } = props;

  //lib hooks
  // state hooks, ref hooks
  const [num, setNum] = useState<number>(1);
  const [carouselTransition, setCarouselTransition] = useState('');
  const imageBox = useRef<HTMLDivElement>(null);

  //form hooks
  //query hooks
  //calculated values
  const cloneImages = useMemo(() => {
    return [images[images.length - 1], ...images, images[0]];
  }, [images]);

  const lastImage = cloneImages.length - 1;

  //effects
  useEffect(() => {
    if (num === lastImage) handleOriginSlide(1);
    else if (num === 0) handleOriginSlide(lastImage - 1);
  }, [cloneImages.length, lastImage, num]);

  //handlers
  function handleSlide(direction: string) {
    direction === 'prev' ? setNum((num) => num - 1) : setNum((num) => num + 1);
    setCarouselTransition('transform 500ms ease-in-out');
  }
  function handleOriginSlide(index: number): void {
    setTimeout(() => {
      setNum(index);
      setCarouselTransition('');
    }, 500);
  }

  return (
    <div
      css={{
        width,
        height,
        backgroundColor: 'rgb(205, 205, 205)',
        margin: '0 auto',
        overflow: 'hidden',
        position: 'relative',
      }}
      className={className}
    >
      <div
        css={{
          display: 'flex',
          width: '100%',
          height: '100%',
          alignItems: 'center',
          transition: `${carouselTransition}`,
          transform: `translateX(-${num}00%)`,
        }}
        ref={imageBox}
      >
        {cloneImages.map((image, i) => {
          return (
            <img
              key={i}
              src={image.src}
              css={{
                width: '100%',
                height: '100%',
                flex: 'none',
              }}
              alt={image.alt}
            />
          );
        })}
      </div>
      <div
        css={{
          height: '100px',
          position: 'absolute',
          marginTop: '-50px',
          top: '50%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '100%',
        }}
      >
        <ArrowButton
          onClick={() => {
            handleSlide('prev');
          }}
        />
        <ArrowButton
          onClick={() => {
            handleSlide('next');
          }}
        />
      </div>
    </div>
  );
}
