import styles from './ProductCard.module.css';
import { motion } from 'framer-motion'

const ProductCard = ({ img, product, color, tag }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{
        scale: 1.1,
        zIndex: 50
      }}
    >
      <img src={img} alt="featured product image" />
      <div className={styles.banner} style={{background: '#' + color}}>{product}</div>
      {
        tag &&
        <div className={styles.tag}>{tag}</div>
      }
    </motion.div>
  )
}

export default ProductCard
