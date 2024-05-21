import { useState, useEffect } from "react";
import styles from "./HomeCarousel.module.css";
import { motion, AnimatePresence } from "framer-motion";

const HomeCarousel = () => {
  const [position, setPosition] = useState(0);

  const next = () => {
    if (position === 3) {
      setPosition(0);
    } else {
      setPosition(position + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      next();
    }, "6000");
  }, [position]);

  return (
    <div className={styles.carousel}>
      <AnimatePresence mode="popLayout">
        {position === 0 && (
          <motion.div
            className={styles.wrapper}
            exit={{
              x: "-33.333%",
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <div className={styles.first}>
              <div className={styles.inner_card}>
                <div className={styles.card_content}></div>
              </div>
            </div>
            <div className={styles.second}></div>
            <div className={styles.third}></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {position === 1 && (
          <motion.div
            className={styles.wrapper}
            exit={{
              x: "-33.333%",
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <div className={styles.second}></div>
            <div className={styles.third}></div>
            <div className={styles.fourth}></div>
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {position === 2 && (
          <motion.div
            className={styles.wrapper}
            exit={{
              x: "-33.333%",
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <div className={styles.third}></div>
            <div className={styles.fourth}></div>
            <div className={styles.first}>
              <div>
                Muralist, Painter, Illustrator - Incredible original artwork X
                High-quality fashion.
              </div>
            </div>{" "}
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {position === 3 && (
          <motion.div
            className={styles.wrapper}
            exit={{
              x: "-33.333%",
            }}
            transition={{
              duration: 1,
              type: "spring",
            }}
          >
            <div className={styles.fourth}></div>
            <div className={styles.first}>
              <div>
                Muralist, Painter, Illustrator - Incredible original artwork X
                High-quality fashion.
              </div>
            </div>{" "}
            <div className={styles.second}></div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default HomeCarousel;
