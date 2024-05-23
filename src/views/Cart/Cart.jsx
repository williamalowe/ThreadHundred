import styles from './Cart.module.css';
import React, { useContext } from 'react'
import { CartContext } from '../App/App'

const Cart = () => {
  const { cart } = useContext(CartContext);

  return (
    <div className={styles.cart}>
      <div className={styles.content}>
        <div className={styles.banner}>
          Your Cart
        </div>
        <div className={styles.products}>
          
        </div>
      </div>
    </div>
  )
}

export default Cart
