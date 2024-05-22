import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "./ProductListing.module.css";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { motion } from 'framer-motion';

const ProductListing = ({ name, price, img, tag }) => {
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
          <button>
            <FontAwesomeIcon icon={faCartShopping} />
          </button>
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
