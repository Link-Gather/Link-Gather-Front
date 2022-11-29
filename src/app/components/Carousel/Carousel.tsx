import React, { useEffect, useRef, useState } from 'react';
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

export function Carousel(props: { images: { id: number; src: string; alt?: string }[]; className: string }) {
  const imageBox = useRef<HTMLDivElement>(null);
  const [num, setNum] = useState<number>(1);
  const [carouselTransition, setCarouselTransition] = useState('');
  const { images, className } = props;
  const cloneImages = [images[images.length - 1], ...images, images[0]];
  const lastImage = cloneImages.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => num + 1);
      setCarouselTransition('transform 500ms ease-in-out');
    }, 2500);
    return () => {
      clearInterval(timer);
    };
  }, [cloneImages.length, num]);

  useEffect(() => {
    if (num === lastImage) handleOriginSlide(1);
    else if (num === 0) handleOriginSlide(lastImage - 1);
  }, [cloneImages.length, lastImage, num]);

  function handleSlideNext() {
    if (num < lastImage) setNum((num) => num + 1);
    setCarouselTransition('transform 500ms ease-in-out');
  }
  function handleSlidePrev() {
    if (num > 0) setNum((num) => num - 1);
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
          position: 'absolute',
          width: '150px',
          marginLeft: '-75px',
          height: '25px',
          bottom: '5px',
          left: '50%',
          display: 'flex',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}
      >
        {images.map((dot) => {
          return (
            <div
              key={dot.src}
              css={[
                {
                  backgroundColor: 'rgb(255, 255, 255)',
                  opacity: '0.9',
                  height: '20px',
                  width: '20px',
                  borderRadius: '50%',
                  cursor: 'pointer',
                  '&:hover': {
                    backgroundColor: 'rgb(182, 182, 182)',
                  },
                },
                dot.id + 1 !== num && {
                  backgroundColor: 'rgb(182, 182, 182)',
                  border: '2px solid white',
                },
              ]}
              onClick={() => {
                setNum(dot.id + 1);
              }}
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
        <ArrowButton onClick={handleSlidePrev} />
        <ArrowButton onClick={handleSlideNext} />
      </div>
    </div>
  );
}
