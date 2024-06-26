import { useState, useEffect } from "react";
import styles from "./HomeCarousel.module.css";
import { motion, AnimatePresence } from "framer-motion";
import ShopButton from "../ShopButton/ShopButton";
import { Link } from "react-router-dom";

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
    <>
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
            <div className={styles.first}></div>
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
            <div className={styles.first}></div>
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
            <div className={styles.first}></div>
            <div className={styles.second}></div>
          </motion.div>
        )}
      </AnimatePresence>
      <div className={styles.button}>
        <ShopButton />
      </div>
    </div>
    <div className={styles.mobile}>
      <AnimatePresence mode='popLayout'>
        {
          position === 0 && 
          <motion.div className={styles.first}
            initial={{
              x: '100vw'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100vw'
            }}
          >
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
        {
          position === 1 && 
          <motion.div className={styles.second}
            initial={{
              x: '100vw'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100vw'
            }}
          >
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
        {
          position === 2 && 
          <motion.div className={styles.third}
            initial={{
              x: '100vw'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100vw'
            }}
          >
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
        {
          position === 3 && 
          <motion.div className={styles.fourth}
            initial={{
              x: '100vw'
            }}
            animate={{
              x: 0
            }}
            exit={{
              x: '-100vw'
            }}
          >
          </motion.div>
        }
      </AnimatePresence>
      <Link to={'/shop'}>
        <button className={styles.mobile_button}>
          Shop Now
        </button>
      </Link>
    </div>
    </>
  );
};

export default HomeCarousel;
