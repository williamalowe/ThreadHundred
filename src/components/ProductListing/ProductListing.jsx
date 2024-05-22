import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductListing.module.css";
import { faCartShopping, faCheck } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import { useState, useContext } from "react";
import { CartContext } from "../../views/App/App";

const ProductListing = ({ name, price, img, tag }) => {
  const { cart, addProduct } = useContext(CartContext);
  const [isAdded, setIsAdded] = useState(false);

  const addItem = () => {
    addProduct(name, img, price);
    setIsAdded(true);
    console.log(cart);
  };

  return (
    <motion.div
      className={styles.card}
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
            <button onClick={() => addItem()}>
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
