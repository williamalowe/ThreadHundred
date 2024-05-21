import { useState, useEffect } from 'react';
import styles from './HomeCarousel.module.css';

const HomeCarousel = () => {
  const [position, setPosition] = useState(0);

  const next = () => {
    if (position === 3) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  }

  useEffect(() => {
    setTimeout(() => {
      next();
    }, "5000")
  }, [position])
  
  return (
    <div className={styles.carousel}>
      {
        position === 0 &&
        <div className={styles.wrapper}>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
        </div>
      }
      {
        position === 1 &&
        <div className={styles.wrapper}>
          <div className={styles.second}></div>
          <div className={styles.third}></div>
          <div className={styles.fourth}></div>
        </div>
      }
      {
        position === 2 &&
        <div className={styles.wrapper}>
          <div className={styles.third}></div>
          <div className={styles.fourth}></div>
          <div className={styles.first}></div>
        </div>
      }
      {
        position === 3 &&
        <div className={styles.wrapper}>
          <div className={styles.fourth}></div>
          <div className={styles.first}></div>
          <div className={styles.second}></div>
        </div>
      }
    </div>
  )
}

export default HomeCarousel
