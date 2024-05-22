import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SideCart.module.css';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { useContext } from 'react';
import { CartContext } from '../../views/App/App';
import { motion } from 'framer-motion';

const SideCart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.sidecart}>
      <motion.button
        whileHover={{
          scale: 1.1
        }}
        whileTap={{
          scale: 0.9
        }}
      >
        {cart.length}
        <FontAwesomeIcon icon={faCartShopping} />
      </motion.button>
    </div>
  )
}

export default SideCart
