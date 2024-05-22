import styles from './ProductCard.module.css';
import { motion } from 'framer-motion'

const ProductCard = ({ img, product, color }) => {
  return (
    <motion.div 
      className={styles.card}
      whileHover={{
        scale: 1.1,
        zIndex: 110
      }}
    >
      <img src={img} alt="featured product image" />
      <div className={styles.banner} style={{background: '#' + color}}>{product}</div>
    </motion.div>
  )
}

export default ProductCard
