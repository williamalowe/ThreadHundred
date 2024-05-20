import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./SideCart.module.css";
import { faArrowRight, faTag } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import ProductSlide from "../ProductSlide/ProductSlide";

const SideCart = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  return (
    <div className={styles.sidecart}>
      <AnimatePresence mode="popLayout">
        {!toggleSidebar && (
          <motion.button
            onClick={() => setToggleSidebar(!toggleSidebar)}
            whileHover={{
              scale: 1.1,
            }}
          >
            <h5>0</h5>
            <FontAwesomeIcon icon={faTag} />
          </motion.button>
        )}
      </AnimatePresence>
      <AnimatePresence mode="popLayout">
        {toggleSidebar && (
          <motion.div
            className={styles.sidebar}
            initial={{
              width: "100px",
              height: "100px",
              borderBottomLeftRadius: "100%",
              borderTopLeftRadius: 0,
            }}
            animate={{
              width: "30vw",
              height: "100vh",
              borderBottomLeftRadius: "1rem",
              borderTopLeftRadius: "1rem",
            }}
            exit={{
              width: "100px",
              height: "100px",
              borderBottomLeftRadius: "100%",
              borderTopLeftRadius: 0,
            }}
          >
            <motion.button
              onClick={() => setToggleSidebar(!toggleSidebar)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <FontAwesomeIcon icon={faArrowRight} />
            </motion.button>
            <div className={styles.list}>
              <h5> 0 Items in cart</h5>
              <div className={styles.items}>
                {/* to be mapped */}
                <ProductSlide />
                <ProductSlide />
                <ProductSlide />
                <ProductSlide />
              </div>
              <motion.div
                className={styles.button}
                whileHover={{
                  scale: 1.1,
                }}
                whileTap={{
                  scale: 0.9,
                }}
              >
                <NavLink to={"/cart"}>Go To Checkout</NavLink>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default SideCart;
