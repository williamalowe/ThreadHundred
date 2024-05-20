import styles from './ProductSlide.module.css';
import { motion } from 'framer-motion';

const ProductSlide = () => {
  return (
    <div className={styles.slide}>
      <img src="./products/product01.jpg" alt="product name image" />
      <article>
        <h3>Warrior Blossom - Premium Soft-Washed Long-Sleeve Shirt</h3>
        <div className={styles.field}>
          <h5>Price: </h5>
          <p>$55.5</p>
        </div>
        <div className={styles.field}>
          <h5>Quantity: </h5>
          <p>2</p>
        </div>
        <div className={styles.field}>
          <h5>Total: </h5>
          <p>$111.0</p>
        </div>
        <div className={styles.remove}>
          <motion.button
            whileHover={{
              scale: 1.1
            }}
            whileTap={{
              scale: 0.9
            }}
          >
            Remove
          </motion.button>
        </div>
      </article>
    </div>
  )
}

export default ProductSlide
