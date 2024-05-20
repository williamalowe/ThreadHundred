import styles from "./ProductCard.module.css";
import { motion } from "framer-motion";

const ProductCard = ({ tag, image, title, price }) => {
  return (
    <motion.div
      className={styles.card}
      whileHover={{
        scale: 1.2,
        zIndex: 100,
      }}
    >
      {tag && <div className={styles.tag}>{tag}</div>}
      <img src={image} alt="product image" />
      <div className={styles.description}>
        <h3>{title}</h3>
        <p>from ${price}</p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
