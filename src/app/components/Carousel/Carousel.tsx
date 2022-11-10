import React, { useEffect, useRef, useState } from 'react';
import styles from './Carousel.module.scss';

export default function Carousel(props: {
  imageData: { id: number; src: string; alt?: string }[];
  width: string;
  height: string;
}) {
  const imageBox = useRef<HTMLDivElement>(null);
  const [num, setNum] = useState<number>(0);
  const imagesLength = props.imageData.length;

  useEffect(() => {
    if (imageBox.current != null) {
      imageBox.current.style.transform = `translateX(-${num}00%)`;
    }
  }, [num]);

  useEffect(() => {
    const timer = setInterval(() => {
      // num < props.imageData.length - 1 ? setNum((num) => num + 1) : setNum(0);
      setNum((num) => (num + 1) % imagesLength);
    }, 2500);

    return () => {
      clearInterval(timer);
    };
  });

  function onMoveNextImage() {
    num < imagesLength - 1 ? setNum((num) => num + 1) : setNum(0);
  }
  function onMovePrevImage() {
    num === 0 ? setNum(imagesLength - 1) : setNum((num) => num - 1);
  }
  function onMoveDotImage(dotNum: number) {
    setNum(dotNum);
  }

  return (
    <div
      className={styles.container}
      css={{ width: props.width, height: props.height }}
    >
      <div className={styles.flexbox} ref={imageBox}>
        {props.imageData.map((image, idx) => {
          return (
            <div
              key={image.src}
              className={styles.img}
              css={{ backgroundImage: `url(${image.src})` }}
            ></div>
          );
        })}
      </div>
      <div className={styles.dotBox}>
        {props?.imageData.map((dot) => {
          return (
            <div
              key={dot.src}
              className={
                dot.id !== num
                  ? `${styles.dot}`
                  : `${styles.dot}  ${styles.blackDot}`
              }
              onClick={() => {
                onMoveDotImage(dot.id);
              }}
            ></div>
          );
        })}
      </div>
      <div className={styles.arrowbox} style={{ width: props.width }}>
        <div className={styles.arrowLeft} onClick={onMovePrevImage}></div>
        <div className={styles.arrowRight} onClick={onMoveNextImage}></div>
      </div>
    </div>
  );
}

export { Carousel };
