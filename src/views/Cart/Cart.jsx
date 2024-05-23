import styles from './Cart.module.css';
import React, { useContext } from 'react'
import { CartContext } from '../App/App'
import CartList from '../../components/CartList/CartList';

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        <div className={styles.banner}>
          Your Cart
        </div>
        <div className={styles.products}>
          <div className={styles.left}>
            
          </div>
          <div className={styles.right}>
            <h3>Your Cart</h3>
            <CartList />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
