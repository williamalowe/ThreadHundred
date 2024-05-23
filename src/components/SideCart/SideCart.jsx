import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './SideCart.module.css';
import { faCancel, faCartShopping, faCross, faX } from '@fortawesome/free-solid-svg-icons';
import { useContext, useState } from 'react';
import { CartContext } from '../../views/App/App';
import { motion, AnimatePresence } from 'framer-motion';
import CartItem from '../CartItem/CartItem';

const SideCart = () => {
  const { cart } = useContext(CartContext);
  const [showCart, setShowCart] = useState(false);

  return (
    <div className={styles.sidecart}>
      <AnimatePresence mode='popLayout'>
      {
        !showCart && 
          <motion.button
          className={styles.open_button}
          onClick={() => setShowCart(true)}
          initial={{
            y: -100
          }}
          animate={{
            y: 0
          }}
          exit={{
            y: -100
          }}
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
      }
      </AnimatePresence>
      <AnimatePresence mode='wait'>
        {
          showCart &&
          <motion.div 
            className={styles.sidebar}
            initial={{
              width: 0
            }}
            animate={{
              width: 400
            }}
            exit={{
              width: 0
            }}
          >
            <div className={styles.header}>
              <h3>Your Cart</h3>
              <p>{cart.length} Items</p>
            </div>
            <div className={styles.products}>
              {
                cart.map((item, index) => 
                <CartItem 
                  key={index}
                  img={item.img}
                  product={item.product}
                  price={item.price}
                />
                )
              }
              
            </div>
            <div className={styles.footer}>
              <h3>TOTAL: $VALUE</h3>
              <motion.button
                whileHover={{
                  boxShadow: 0,
                  x: 4,
                  y: 4
                }}
                whileTap={{
                  scale: 0.9
                }}
              >
                Checkout
              </motion.button>
            </div>
          </motion.div>
        }
      </AnimatePresence>
      <AnimatePresence mode='popLayout'>
      {
        showCart && 
          <motion.button
          className={styles.close_button}
          onClick={() => setShowCart(false)}
          initial={{
            x: 100
          }}
          animate={{
            x: 0
          }}
          exit={{
            x: 100
          }}
          whileHover={{
            scale: 1.1
          }}
          whileTap={{
            scale: 0.9
          }}
        >
          <FontAwesomeIcon icon={faX} />
        </motion.button>
      }
      </AnimatePresence>
    </div>
  )
}

export default SideCart
