import styles from './ShopButton.module.css';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const ShopButton = () => {
  return (
    <Link to='/shop'>
      <motion.button 
        className={styles.button}
        initial={{
          rotate: 2
        }}
        whileHover={{
          boxShadow: 0,
          x: 4,
          y: 4,
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        Shop Now!
      </motion.button>
    </Link>
  )
}

export default ShopButton
