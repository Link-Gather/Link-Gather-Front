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
  const [num, setNum] = useState<number>(0);
  const { images, className } = props;

  useEffect(() => {
    if (imageBox.current != null) {
      imageBox.current.style.transform = `translateX(-${num}00%)`;
    }
  }, [num]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => (num + 1) % images.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  });

  function handleSlideNext() {
    num < images.length - 1 ? setNum((num) => num + 1) : setNum(0);
  }
  function handleSlidePrev() {
    num === 0 ? setNum(images.length - 1) : setNum((num) => num - 1);
  }
  function handleSlideDot(dotNum: number) {
    setNum(dotNum);
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
          transition: 'all 0.5s linear',
        }}
        ref={imageBox}
      >
        {images.map((image) => {
          return (
            <img
              key={image.src}
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
                dot.id !== num && {
                  backgroundColor: 'rgb(182, 182, 182)',
                  border: '2px solid white',
                },
              ]}
              onClick={() => {
                handleSlideDot(dot.id);
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
