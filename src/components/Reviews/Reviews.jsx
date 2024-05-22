import { faStar } from "@fortawesome/free-solid-svg-icons";
import styles from "./Reviews.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Testimonial from "../Testimonial/Testimonial";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const Reviews = () => {
  const [visible, setVisible] = useState(0);

  const next = () => {
    if (visible === 4) {
      setVisible(0);
    } else {
      setVisible(visible + 1);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      next();
    }, "8000");
  }, [visible]);

  return (
    <div className={styles.reviews}>
      <h3>Over 3000 Happy Customers</h3>
      <div className={styles.stars}>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <p>3000+ 5 star reviews</p>
      <AnimatePresence mode="popLayout">
        {visible === 0 && (
          <motion.div
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Testimonial
              name={"Ryan Adams"}
              header={"This sh*t is sick!"}
              comment={
                "I recently purchased a shirt that has quickly become my all-time favorite. Simply put, this shirt is the greatest shirt in the history of textiles. The fabric is incredibly soft and comfortable, making it perfect for any occasion."
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visible === 1 && (
          <motion.div
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Testimonial
              name={"Nikola Blumer"}
              header={"Comfy and fun as"}
              comment={
                "Super comfy, high quality shirt and print. Honestly so fun to wear about and have older relatives try and figure out how to read it :)"
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visible === 2 && (
          <motion.div
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Testimonial
              name={"P.R."}
              header={"*Chef`s kiss*"}
              comment={
                "Not only were these shirts great quality, the customer service team is amazing. Thank you so much. Will definitely be ordering again."
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visible === 3 && (
          <motion.div
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Testimonial
              name={"Nathan"}
              header={"Solid"}
              comment={
                "Awesome.... Does exactly what a t-shirt is meant to do."
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {visible === 4 && (
          <motion.div
            initial={{
              x: "100vw",
            }}
            animate={{
              x: 0,
            }}
            exit={{
              x: "-100vw",
            }}
            transition={{
              duration: 1,
            }}
          >
            <Testimonial
              name={"Brianna Murphy"}
              header={"Comfortably Crying"}
              comment={
                "This hoodie is so soft and warm that I just want to cry. It`s like too soft to be real!"
              }
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Reviews;
