import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

export function Carousel(props: { images: { id: number; src: string; alt?: string }[]; className?: string }) {
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
    <div className={`${styles.container} ${className}`}>
      <div className={styles.flexbox} ref={imageBox}>
        {images.map((image) => {
          return (
            <img key={image.src} className={styles.img} css={{ backgroundImage: `url(${image.src})` }} alt={''}></img>
          );
        })}
      </div>
      <div className={styles.dotBox}>
        {images.map((dot) => {
          return (
            <div
              key={dot.src}
              className={dot.id !== num ? `${styles.dot}` : `${styles.dot}  ${styles.blackDot}`}
              onClick={() => {
                handleSlideDot(dot.id);
              }}
            ></div>
          );
        })}
      </div>
      <div className={styles.arrowBox}>
        <button className={styles.arrowLeft} onClick={handleSlidePrev} />
        <button className={styles.arrowRight} onClick={handleSlideNext} />
      </div>
    </div>
  );
}
