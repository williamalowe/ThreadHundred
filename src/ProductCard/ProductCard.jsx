import styles from './ProductCard.module.css';
import { motion } from 'framer-motion'

const ProductCard = ({ img, product }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{
        scale: 1.1
      }}
    >
      <img src={img} alt="featured product image" />
      <div className={styles.banner}>{product}</div>
    </motion.div>
  )
}

export default ProductCard
