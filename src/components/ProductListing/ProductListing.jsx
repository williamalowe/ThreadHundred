import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductListing.module.css";
import { faCartShopping, faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState, useContext, useEffect } from "react";
import { CartContext } from "../../views/App/App";

const child = {
  hidden: {
    x: -20,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
  },
};

const ProductListing = ({ name, price, img, tag }) => {
  const { addProduct, cart } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const inCart = () => {
    setIsAdded(false);
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].product === name) {
        setIsAdded(true);
      }
    }
  };
  useEffect(() => {
    inCart();
  }, [cart]);

  return (
    <motion.div
      className={styles.card}
      variants={child}
      whileHover={{
        scale: 1.1,
      }}
    >
      <div className={styles.upper}>
        <div>{tag && <div className={styles.tag}>{tag}</div>}</div>
        <div>
          {isAdded ? (
            <FontAwesomeIcon icon={faCheck} />
          ) : (
            <button onClick={() => addProduct(name, img, price)}>
              <FontAwesomeIcon icon={faCartShopping} />
            </button>
          )}
        </div>
      </div>
      <img src={img} alt={name} />
      <div className={styles.lower}>
        <h5>{name}</h5>
        <p>${price}</p>
      </div>
    </motion.div>
  );
};

export default ProductListing;
