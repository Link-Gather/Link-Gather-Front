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
  const { images, className } = props;
  const cloneImages = [images[images.length - 1], ...images, images[0]];
  const lastImage = cloneImages.length - 1;

  useEffect(() => {
    const timer = setInterval(() => {
      num === cloneImages.length ? setNum(1) : setNum((num) => num + (1 % cloneImages.length));
    }, 5000);
    return () => {
      clearInterval(timer);
    };
  }, [cloneImages.length, num]);

  useEffect(() => {
    if (num === lastImage) handleOriginSlide(1);
  }, [cloneImages.length, lastImage, num]);

  function handleSlideNext() {
    if (num < lastImage) setNum((num) => num + 1);
  }
  function handleSlidePrev() {
    num === 1 ? handleOriginSlide(lastImage) : setNum((num) => num - 1);
  }
  function handleOriginSlide(index: number): void {
    setTimeout(() => {
      if (imageBox.current !== null) setNum(index);
    }, 1);
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
          transition: num !== lastImage ? 'all 0.5s linear' : null,
          transform: num !== lastImage ? `translateX(-${num}00%)` : null,
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
