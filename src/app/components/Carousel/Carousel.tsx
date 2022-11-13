import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

export default function Carousel(props: {
  images: { id: number; src: string; alt?: string }[];
  width: string;
  height: string;
}) {
  const imageBox = useRef<HTMLDivElement>(null);
  const [num, setNum] = useState<number>(0);

  useEffect(() => {
    if (imageBox.current != null) {
      imageBox.current.style.transform = `translateX(-${num}00%)`;
    }
  }, [num]);

  useEffect(() => {
    const timer = setInterval(() => {
      setNum((num) => (num + 1) % props.images.length);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  });

  function handleSlideNext() {
    num < props.images.length - 1 ? setNum((num) => num + 1) : setNum(0);
  }
  function handleSlidePrev() {
    num === 0 ? setNum(props.images.length - 1) : setNum((num) => num - 1);
  }
  function handleSlideDot(dotNum: number) {
    setNum(dotNum);
  }

  return (
    <div className={styles.container} css={{ width: props.width, height: props.height }}>
      <div className={styles.flexbox} ref={imageBox}>
        {props.images.map((image) => {
          return <div key={image.src} className={styles.img} css={{ backgroundImage: `url(${image.src})` }}></div>;
        })}
      </div>
      <div className={styles.dotBox}>
        {props.images.map((dot) => {
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
      <div className={styles.arrowbox} style={{ width: props.width }}>
        <button className={styles.arrowLeft} onClick={handleSlidePrev} />
        <button className={styles.arrowRight} onClick={handleSlideNext} />
      </div>
    </div>
  );
}

export { Carousel };
