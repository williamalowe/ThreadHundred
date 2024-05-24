import { useEffect, useState } from "react";
import styles from "./AnnouncementBanner.module.css";
import { motion, AnimatePresence } from "framer-motion";

const AnnouncementBanner = () => {
  const [visibleMessage, setVisibleMessage] = useState(0);
  const nextMessage = () => {
    if (visibleMessage === 2) {
      setVisibleMessage(0);
    } else {
      setVisibleMessage(visibleMessage + 1);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      nextMessage();
    }, "5000");
  }, [visibleMessage]);

  return (
    <div className={styles.announcement}>
      <AnimatePresence mode="popLayout">
        {visibleMessage === 0 && (
          <motion.div
            className={styles.message}
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              duration: 1,
            }}
          >
            Free AU Shipping for orders over $85.
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visibleMessage === 1 && (
          <motion.div
            className={styles.message}
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              duration: 1,
            }}
          >
            Winter 24&apos; dropping soon...
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visibleMessage === 2 && (
          <motion.div
            className={styles.message}
            initial={{
              x: "100%",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100%",
            }}
            transition={{
              duration: 1,
            }}
          >
            International shipping coming soon!
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnnouncementBanner;
