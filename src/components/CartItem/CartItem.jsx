import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './CartItem.module.css';
import { faX } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import { useContext } from 'react';
import { CartContext } from '../../views/App/App';

const CartItem = ({img, product, price}) => {
  const { removeProduct } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <div className={styles.img}>
        <img src={img} alt={product} />
      </div>
      <div className={styles.desc}>
        <h3>{product}</h3>
        <h5>${price}</h5>
      </div>
      <div className={styles.button}>
        <motion.button
          onClick={() => removeProduct(product)}
          whileHover={{
            boxShadow: 0,
            x: 4,
            y: 4
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </motion.button>
      </div>
    </div>
  )
}

export default CartItem
